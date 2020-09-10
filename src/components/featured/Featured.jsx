import React from "react";
import {
    featured,
    featured__title,
    menu,
    menu__card,
    menu__img,
    menu__name,
    menu__rating,
    bestsellers,
    bestsellers__header,
    bestsellers__link,
} from "./Featured.module.css";
import { container, flex_row, link, side_padding } from "../../App.module.css";

import featuredOne from "../images/featured/featured-1.jpg";
import featuredTwo from "../images/featured/featured-2.jpg";
import featuredThree from "../images/featured/featured-3.jpg";
import cx from "classnames";

const Featured = () => {
    return (
        <main>
            <div className={featured}>
                <div className={container}>
                    <div className={side_padding}>
                        <div style={{ "--horizontal-space": "4em" }} className={featured__title}>
                            <h3>Check out these lavish dishes from our menu</h3>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magni reprehenderit harum at! Hic enim optio id
                                    rerum animi non tempore itaque dolore maiores deserunt?
                                </p>
                                <a href="#" className={link}>
                                    Learn More >
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={side_padding}>
                        <div className={cx(menu, flex_row)}>
                            <div className={menu__card}>
                                <img src={featuredOne} alt="menu-card" className={menu__img} />
                                <div className={menu__name}>
                                    <div>
                                        <h5>Cherry Shortcake</h5>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className={menu__rating}>4.7</div>
                                </div>
                            </div>
                            <div className={menu__card}>
                                <img src={featuredTwo} alt="menu-card" className={menu__img} />
                                <div className={menu__name}>
                                    <div>
                                        <h5>Cherry Shortcake</h5>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className={menu__rating}>4.7</div>
                                </div>
                            </div>
                            <div className={menu__card}>
                                <img src={featuredOne} alt="menu-card" className={menu__img} />
                                <div className={menu__name}>
                                    <div>
                                        <h5>Cherry Shortcake</h5>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className={menu__rating}>4.7</div>
                                </div>
                            </div>
                            <div className={menu__card}>
                                <img src={featuredThree} alt="menu-card" className={menu__img} />
                                <div className={menu__name}>
                                    <div>
                                        <h5>Cherry Shortcake</h5>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className={menu__rating}>4.7</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={bestsellers}>
                    <div className={side_padding}>
                        <div className={container}>
                            <h3 className={bestsellers__header}>Our bestsellers</h3>
                            <div className={flex_row}>
                                <div className={menu__card}>
                                    <img src={featuredTwo} alt="menu-card" className={menu__img} />
                                    <div className={menu__name}>
                                        <div>
                                            <h5>Cherry Shortcake</h5>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className={menu__rating}>4.7</div>
                                    </div>
                                </div>
                                <div className={menu__card}>
                                    <img src={featuredOne} alt="menu-card" className={menu__img} />
                                    <div className={menu__name}>
                                        <div>
                                            <h5>Cherry Shortcake</h5>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className={menu__rating}>4.7</div>
                                    </div>
                                </div>
                                <div className={menu__card}>
                                    <img src={featuredThree} alt="menu-card" className={menu__img} />
                                    <div className={menu__name}>
                                        <div>
                                            <h5>Cherry Shortcake</h5>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className={menu__rating}>4.7</div>
                                    </div>
                                </div>
                                <a className={cx(link, bestsellers__link)} href="#">
                                    View All >
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Featured;
