import React from "react";
import { grid, grid__one, grid__two, grid__three, grid__four, grid__five, grid__six, grid__seven } from "./Grid.module.css";
import { flex_column, link, vertical_spacer } from "../../App.module.css";

import cx from "classnames";

import gridOne from "../images/grid/grid-2.jpg";
import gridTwo from "../images/grid/grid-3.jpg";
import gridThree from "../images/grid/grid-4.jpg";

const Grid = () => {
    return (
        <content>
            <div style={{ "--column-align": "start" }} className={grid}>
                <div className={grid__one}>
                    <img src={gridTwo} alt="grid-two" />
                </div>
                <div className={grid__two}></div>
                <div className={cx(flex_column, grid__three)}>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className={cx(flex_column, grid__four)}>
                    <img src={gridOne} alt="grid-one" />
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
        </content>
    );
};

export default Grid;
