import React from "react";
import { download, download__buttons, download__image, download__message, download__float } from "./Download.module.css";
import { container, side_padding, vertical_spacer, horizontal_spacer, img_button } from "../../App.module.css";

import cx from "classnames";
import downloadOne from "../images/download/download-1.jpg";
import app from "../images/app.png";
import playstore from "../images/download/playstore.png";
import appstore from "../images/download/appstore.png";

const Download = () => {
    return (
        <aside>
            <div className={download}>
                <div className={container}>
                    <div className={side_padding}>
                        <div style={{ "--vertical-space": "1.5em" }} className={cx(vertical_spacer, download__message)}>
                            <h3>Download Our App</h3>
                            <p>
                                For an easier access to our menu, reservations, and details about the restaurant, we made an app just for you! No more going through hassle, we're just an app away.
                            </p>
                            <div style={{ "--horizontal-space": "1em" }} className={cx(horizontal_spacer, download__buttons)}>
                                {/* <button style={{ "--color-accent": "#fff", "--button-text": "#000" }} className={button}>
                                    App Store
                                </button>
                                <button style={{ "--color-accent": "#000" }} className={button}>
                                    Play Store
                                </button> */}
                                <a href="https://www.apple.com" className={img_button}>
                                    <img src={appstore} alt="download-appstore" />
                                </a>
                                <a href="https://play.google.com" className={img_button}>
                                    <img src={playstore} alt="download-playstore" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <img className={download__float} src={app} alt="phone-img" />
            </div>
            <img className={download__image} src={downloadOne} alt="download-app" />
        </aside>
    );
};

export default Download;
