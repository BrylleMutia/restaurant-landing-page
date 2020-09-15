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
            <div style={{ "--column-align": "start" }} className={grid} id="about">
                <div className={grid__one}>
                    <img src={gridTwo} alt="grid-two" />
                </div>
                <div className={grid__two}></div>
                <div className={cx(flex_column, grid__three)}>
                    <h5>"Their desserts were something to return to..."</h5>
                    <p>- Grace Dent (Gourmet Critic)</p>
                </div>
                <div className={cx(flex_column, grid__four)}>
                    <img src={gridOne} alt="grid-one" />
                </div>
                <div className={cx(flex_column, grid__five)}>
                    <img src={gridThree} alt="grid-three" />
                </div>
                <div className={cx(flex_column, grid__six)}>
                    <h5>"Such fine details in every dish! What more could I ask for?"</h5>
                    <p>- Andy Hayler (Gourmet Critic)</p>
                </div>
                <div style={{ "--vertical-space": "1.5em" }} className={cx(flex_column, vertical_spacer, grid__seven)}>
                    <h4>Foodemy all the way!</h4>
                    <p>
                        Foodemy was established by Brylle Mutia and colleagues way back May 2010. We have served thousands of customers throughout those years, and nothing compares to seeing them satisfied with the food we make.
                    </p>
                    <a href="#" className={link}>
                        More About Us >
                    </a>
                </div>
            </div>
        </content>
    );
};

export default Grid;
