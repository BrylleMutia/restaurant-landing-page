import React from "react";
import { footer, footer__contact, footer__download, footer__link, footer__links, contact_icons } from "./Footer.module.css";
import { container, side_padding } from "../../App.module.css";

import cx from "classnames";

import facebook from "../images/footer/facebook.png";
import twitter from "../images/footer/twitter.png";
import gmail from "../images/footer/gmail.png";
import linkedin from "../images/footer/linkedin.png";

import playstore from "../images/download/playstore.png";
import appstore from "../images/download/appstore.png";

const Footer = () => {
    return (
        <footer>
            <div className={container}>
                <div className={side_padding}>
                    <div className={footer}>
                        <div className={footer__contact}>
                            <h3>Totsuki Academy</h3>
                            <div className={contact_icons}>
                                <a href="#">
                                    <img src={facebook} alt="contact-facebook" />
                                </a>
                                <a href="#">
                                    <img src={twitter} alt="contact-twitter" />
                                </a>
                                <a href="#">
                                    <img src={gmail} alt="contact-gmail" />
                                </a>
                                <a href="#">
                                    <img src={linkedin} alt="contact-linkedin" />
                                </a>
                            </div>
                        </div>
                        <div className={footer__download}>
                            <a href="#">
                                <img src={appstore} alt="appstore" />
                            </a>
                            <a href="#">
                                <img src={playstore} alt="playstore" />
                            </a>
                        </div>
                        <div className={footer__links}>
                            <div className={footer__link}>
                                <h4>Links</h4>
                                <a href="#">
                                    <p>About us</p>
                                </a>
                                <a href="#">
                                    <p>Menu</p>
                                </a>
                                <a href="#">
                                    <p>Location</p>
                                </a>
                                <a href="#">
                                    <p>Membership</p>
                                </a>
                                <a href="#">
                                    <p>Affiliates</p>
                                </a>
                            </div>
                            <div className={footer__link}>
                                <h4>Links</h4>
                                <a href="#">
                                    <p>About us</p>
                                </a>
                                <a href="#">
                                    <p>Menu</p>
                                </a>
                                <a href="#">
                                    <p>Location</p>
                                </a>
                                <a href="#">
                                    <p>Membership</p>
                                </a>
                                <a href="#">
                                    <p>Affiliates</p>
                                </a>
                            </div>
                            <div className={footer__link}>
                                <h4>Links</h4>
                                <a href="#">
                                    <p>About us</p>
                                </a>
                                <a href="#">
                                    <p>Menu</p>
                                </a>
                                <a href="#">
                                    <p>Location</p>
                                </a>
                                <a href="#">
                                    <p>Membership</p>
                                </a>
                                <a href="#">
                                    <p>Affiliates</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
