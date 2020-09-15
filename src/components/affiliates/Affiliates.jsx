import React from "react";
import { affiliates, affiliates__header, affiliates__main } from "./Affiliates.module.css";
import { container, side_padding, flex_column, flex_row } from "../../App.module.css";

import cx from "classnames";

import google from "../images/affiliates/google.png";
import amazon from "../images/affiliates/amazon.png";
import cocacola from "../images/affiliates/cocacola.png";
import instagram from "../images/affiliates/instagram.png";
import paypal from "../images/affiliates/paypal.png";

const Affiliates = () => {
    return (
        <aside>
            <div className={cx(flex_column, affiliates)}>
                <div className={container}>
                    <div className={side_padding}>
                        <div className={affiliates__header}>
                            <h1>Be one of our business partners.</h1>
                            <p>
                                Some of the companies that worked with us to deliver better products for our beloved customers. 
                            </p>
                        </div>
                        <div style={{ "--flex-gap": "0" }} className={cx(flex_row, affiliates__main)}>
                            <a href="https://google.com">
                                <img src={google} alt="google" />
                            </a>
                            <a href="https://paypal.com">
                                <img src={paypal} alt="paypal" />
                            </a>
                            <a href="https://coca-colacompany.com">
                                <img src={cocacola} alt="cocacola" />
                            </a>
                            <a href="https://amazon.com">
                                <img src={amazon} alt="amazon" />
                            </a>
                            <a href="https://instagram.com">
                                <img src={instagram} alt="instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Affiliates;
