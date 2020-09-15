import React from "react";
import { action, action__form, action__text } from "./CallToAction.module.css";
import { container, side_padding, flex_row, vertical_spacer, button } from "../../App.module.css";

import cx from "classnames";

const CallToAction = () => {
    return (
        <div className={container}>
            <div className={side_padding}>
                <div style={{ "--row-justify": "space-evenly" }} className={cx(flex_row, action)}>
                    <div style={{ "--vertical-space": "0.5em" }} className={cx(vertical_spacer, action__text)}>
                        <h3>Ready to get started?</h3>
                        <p>Subscribe to our weekly newsletter!</p>
                    </div>
                    <form className={action__form} action="POST">
                        <input type="email" name="email" id="email" placeholder="Enter your email" />
                        <button style={{ "--button-radius": "0" }} className={button} type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;