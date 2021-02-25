import React, { useState } from "react";
import { affiliates, affiliates__header, affiliates__main } from "./Affiliates.module.css";
import { container, side_padding, flex_column, flex_row } from "../../App.module.css";

import Affiliate from "./affiliate/Affiliate";

import cx from "classnames";

import google from "../images/affiliates/google.png";
import amazon from "../images/affiliates/amazon.png";
import cocacola from "../images/affiliates/cocacola.png";
import instagram from "../images/affiliates/instagram.png";
import paypal from "../images/affiliates/paypal.png";

const Affiliates = () => {
    const [partners] = useState([
        {
            name: "Google",
            link: "https://www.google.com",
            logo: google,
        },
        {
            name: "Paypal",
            link: "https://www.paypal.com",
            logo: paypal,
        },
        {
            name: "Coca-cola",
            link: "https://www.coca-colacompany.com",
            logo: cocacola,
        },
        {
            name: "Amazon",
            link: "https://www.amazon.com",
            logo: amazon,
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com",
            logo: instagram,
        },
    ]);

    return (
        <aside>
            <div className={cx(flex_column, affiliates)}>
                <div className={container}>
                    <div className={side_padding}>
                        <div className={affiliates__header}>
                            <h1>Be one of our business partners.</h1>
                            <p>Some of the companies that worked with us to deliver better products for our beloved customers.</p>
                        </div>
                        <div style={{ "--flex-gap": "0" }} className={cx(flex_row, affiliates__main)}>
                            {partners.map((partner, index) => (
                                <Affiliate key={index} name={partner.name} link={partner.link} logo={partner.logo} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Affiliates;
