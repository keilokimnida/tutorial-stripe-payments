import React from 'react';
import { ToastContainer } from "react-toastify";

import Title from './Title';
import Header from "./Header";
import Footer from "./Footer";
import config from "../config/config";

const PageLayout = ({ title, children }) => {
    const toastTiming = config.toastTiming;
    return (
        <div className="c-Page-layout">
            <ToastContainer
                position="top-center"
                autoClose={toastTiming}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Title title={title ? title : "Deluxe"} />
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default PageLayout;