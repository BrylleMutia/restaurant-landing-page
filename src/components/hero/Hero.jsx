import React from "react";
import { hero, hero__title, hero__header, hero__subheader, hero__form } from "./Hero.module.css";
import { container, vertical_spacer, input, button, side_padding } from "../../App.module.css";

import cx from "classnames";
import Navbar from "./navbar/Navbar";

const Hero = () => {
    return (
        <header>
            <div className={hero}>
                <div className={container}>
                    <Navbar />
                    <div className={side_padding}>
                        <div className={cx(hero__title, vertical_spacer)}>
                            <h3 className={hero__header}>Food for Every Craving</h3>
                            <p className={hero__subheader}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, rem?</p>
                            <form className={hero__form}>
                                <input
                                    style={{ borderBottomRightRadius: "0", borderTopRightRadius: "0" }}
                                    className={input}
                                    type="search"
                                    name="search"
                                    id="search"
                                    placeholder="Search our menu"
                                />
                                <button style={{ borderBottomLeftRadius: "0", borderTopLeftRadius: "0" }} className={button} type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
