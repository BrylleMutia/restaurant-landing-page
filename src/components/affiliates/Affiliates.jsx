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
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum in, perspiciatis voluptate quibusdam totam voluptas.
                            </p>
                        </div>
                        <div style={{ "--flex-gap": "0" }} className={cx(flex_row, affiliates__main)}>
                            <a href="#">
                                <img src={google} alt="google" />
                            </a>
                            <a href="#">
                                <img src={paypal} alt="paypal" />
                            </a>
                            <a href="#">
                                <img src={cocacola} alt="cocacola" />
                            </a>
                            <a href="#">
                                <img src={amazon} alt="amazon" />
                            </a>
                            <a href="#">
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
