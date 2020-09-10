import React from "react";
import { grid, grid__one, grid__two, grid__three, grid__four, grid__five, grid__six, grid__seven } from "./Grid.module.css";
import { flex_column, link, vertical_spacer } from "../../App.module.css";

import cx from "classnames";

import gridOne from "../images/featured/featured-6.jpg";
import gridTwo from "../images/featured/featured-5.jpg";
import gridThree from "../images/featured/featured-7.jpg";

const Grid = () => {
    return (
        <aside>
            <div className={grid}>
                <div className={cx(flex_column, grid__one)}>
                    <img src={gridOne} alt="grid-one" />
                </div>
                <div className={cx(flex_column, grid__two)}></div>
                <div className={cx(flex_column, grid__three)}>
                    <h5>Lorem ipsum dolor sit amet consectetur? </h5>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className={cx(flex_column, grid__four)}>
                    <img src={gridTwo} alt="grid-two" />
                </div>
                <div className={cx(flex_column, grid__five)}>
                    <img src={gridThree} alt="grid-three" />
                </div>
                <div className={cx(flex_column, grid__six)}>
                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing. </h5>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div style={{ "--vertical-space": "1.5em" }} className={cx(flex_column, vertical_spacer, grid__seven)}>
                    <h4>Restaurant Travel Guide</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quos eum laboriosam aliquam, saepe itaque incidunt rerum deleniti autem nemo repellendus, placeat sed perspiciatis culpa.
                    </p>
                    <a href="#" className={link}>
                        Learn More >
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default Grid;
