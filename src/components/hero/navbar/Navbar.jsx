import React, { useState } from "react";
import { navbar, brand, navbar__links, navbar__link, navbar__div, menu, menu__hamburger, menu__open } from "./Navbar.module.css";
import { horizontal_spacer } from "../../../App.module.css";
import cx from "classnames";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <nav>
            <div className={navbar} style={{ height: isOpen && "11.6em" }}>
                <div className={navbar__div}>
                    <h3 className={brand}>Foodemy!</h3>
                    <div className={cx(menu, isOpen && menu__open)} onClick={handleOpenMenu}>
                        <div className={menu__hamburger}></div>
                    </div>
                </div>
                <ul className={cx(navbar__links, horizontal_spacer)} style={{ opacity: isOpen || window.innerWidth > 740 ? "1" : "0" }}>
                    <li className={navbar__link}>
                        <a href="#about">About Us</a>
                    </li>
                    <li className={navbar__link}>
                        <a href="#menu">Our Menu</a>
                    </li>
                    <li className={navbar__link}>
                        <a href="#reservation">Reservations</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
