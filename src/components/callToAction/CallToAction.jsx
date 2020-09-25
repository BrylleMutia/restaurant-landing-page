import React from "react";
import { action, action__form, action__text } from "./CallToAction.module.css";
import { container, side_padding, flex_row, vertical_spacer, button, input } from "../../App.module.css";

import cx from "classnames";

const CallToAction = () => {
    return (
        <div className={container}>
            <div className={side_padding}>
                <div style={{ "--row-justify": "space-evenly" }} className={cx(flex_row, action)} id="reservation">
                    <div style={{ "--vertical-space": "0.5em" }} className={cx(vertical_spacer, action__text)}>
                        <h3>Book a reservation now!</h3>
                        <p> We'll ask for details through email.</p>
                    </div>
                    <form className={action__form} style={{ "--button-radius": "0", "--input-radius": "0" }} action="POST">
                        <input className={input} type="email" name="email" id="email" placeholder="Enter your email" />
                        <button className={button} type="submit">add reservation</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
