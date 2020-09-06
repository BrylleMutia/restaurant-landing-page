import React from "react";
import { navbar, brand, navbar__links, navbar__link } from "./Navbar.module.css";
import { container, horizontal_spacer } from "../../../App.module.css";
import cx from "classnames";

const Navbar = () => {
    return (
        <nav>
            <div className={navbar}>
                <h3 className={brand}>Totsuki Academy</h3>
                <ul className={cx(navbar__links, horizontal_spacer)}>
                    <li className={navbar__link}>
                        <a href="#">About Us</a>
                    </li>
                    <li className={navbar__link}>
                        <a href="#">Our Menu</a>
                    </li>
                    <li className={navbar__link}>
                        <a href="#">Reservations</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
