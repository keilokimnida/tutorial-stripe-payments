const { Accounts } = require("../model_definitions/Accounts");
const { PaymentMethods } = require("../model_definitions/PaymentMethods");

module.exports.findAccountByID = (accountID) => Accounts.findByPk(accountID, {
    include: [{
        model: PaymentMethods,
        as: "payment_accounts"
    }] 
});

module.exports.createAccount = (username, email, password, stripeCustomerID) => Accounts.create({
    username,
    email,
    passwords: [{
        password: bcrypt.hashSync(password, 10)
    }],
    stripe_customer_id: stripeCustomerID
});

module.exports.updateAccountByID = (accountID, content) => Accounts.update({
    ...content
}, {
    where: {
        account_id: accountID
    }
})

module.exports.findAccountByStripeCustID = (stripeCustomerID) => Accounts.findOne({
    where: {
        stripe_customer_id: stripeCustomerID
    },
    include: [{
        model: PaymentMethods,
        as: "payment_accounts"
    }] 
});