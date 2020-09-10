import React from "react";
import { download, download__buttons, download__image, download__message, download__float } from "./Download.module.css";
import { container, side_padding, vertical_spacer, horizontal_spacer, button, flex_row, img_button } from "../../App.module.css";

import cx from "classnames";
import downloadOne from "../images/featured/featured-1.jpg";
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid in fuga iste, consequuntur perspiciatis quae at
                                similique fugiat molestiae praesentium.
                            </p>
                            <div style={{ "--horizontal-space": "1em" }} className={cx(horizontal_spacer, download__buttons)}>
                                {/* <button style={{ "--color-accent": "#fff", "--button-text": "#000" }} className={button}>
                                    App Store
                                </button>
                                <button style={{ "--color-accent": "#000" }} className={button}>
                                    Play Store
                                </button> */}
                                <button className={img_button}>
                                    <a href="#">
                                        <img src={appstore} alt="download-appstore" />
                                    </a>
                                </button>
                                <button className={img_button}>
                                    <a href="#">
                                        <img src={playstore} alt="download-playstore" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img className={download__float} src={downloadOne} alt="phone-img" />
            </div>
            <img className={download__image} src={downloadOne} alt="download-app" />
        </aside>
    );
};

export default Download;
