import React from "react";
import { affiliates, affiliates__header, affiliates__main } from "./Affiliates.module.css";
import { container, side_padding, flex_column, flex_row } from "../../App.module.css";

import cx from "classnames";

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
                        <div className={cx(flex_row, affiliates__main)}>
                            <h5>GOOGLE</h5>
                            <h5>MICROSOFT</h5>
                            <h5>FACEBOOK</h5>
                            <h5>CISCO</h5>
                            <h5>APPLE</h5>
                        </div>
                    </div>  
                </div>
            </div>
        </aside>
    );
};

export default Affiliates;
