import React from "react";
import { affiliate } from "./Affiliate.module.css";

const Affiliate = ({ link, logo, name }) => {
    return (
        <a href={link} className={affiliate}>
            <img src={logo} alt={name} />
        </a>
    );
};

export default Affiliate;
