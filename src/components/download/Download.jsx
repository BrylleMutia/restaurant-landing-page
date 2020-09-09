import React from "react";
import { download, download__buttons, download__image, download__message } from "./Download.module.css";
import { container, side_padding, vertical_spacer, horizontal_spacer, button, flex_row } from "../../App.module.css";

import cx from "classnames";
import downloadOne from "../images/featured/featured-1.jpg";

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
                            <div className={cx(horizontal_spacer, download__buttons)}>
                                <button style={{ "--color-accent": "#fff", "--button-text": "#000"}} className={button}>App Store</button>
                                <button style={{ "--color-accent": "#000"}} className={button}>Play Store</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className={download__image} src={downloadOne} alt="download-app" />
        </aside>
    );
};

export default Download;
