import React, { useState } from "react";
import {
    featured__title,
    menu,
    bestsellers,
    bestsellers__header,
    bestsellers__link,
} from "./Featured.module.css";
import { container, flex_row, link, side_padding } from "../../App.module.css";

import Card from "./card/Card";

import featuredOne from "../images/featured/featured-5.jpg";
import featuredTwo from "../images/featured/featured-6.jpg";
import featuredThree from "../images/featured/featured-7.jpg";
import featuredFour from "../images/featured/featured-1.jpg";

import bestsellerOne from "../images/featured/featured-2.jpg";
import bestsellerTwo from "../images/featured/featured-3.jpg";
import bestsellerThree from "../images/featured/featured-4.jpg";

import cx from "classnames";

const Featured = () => {
    const [featured, setFeatured] = useState([
        {
            recipeName: "Recipe Name",
            image: featuredOne,
            description: "Lorem ipsum dolor sit amet.",
            rating: 4.5,
        },
        {
            recipeName: "Recipe Name",
            image: featuredTwo,
            description: "Lorem ipsum dolor sit amet.",
            rating: 4.4,
        },
        {
            recipeName: "Recipe Name",
            image: featuredThree,
            description: "Lorem ipsum dolor sit amet.",
            rating: 4.4,
        },
        {
            recipeName: "Recipe Name",
            image: featuredFour,
            description: "Lorem ipsum dolor sit amet.",
            rating: 4.6,
        },
    ]);

    const [best, setBest] = useState([
        {
            recipeName: "Recipe Name",
            image: bestsellerOne,
            description: "Lorem ipsum dolor sit amet.",
            rating: 4.9,
        },
        {
            recipeName: "Recipe Name",
            image: bestsellerTwo,
            description: "Lorem ipsum dolor sit amet.",
            rating: 4.7,
        },
        {
            recipeName: "Recipe Name",
            image: bestsellerThree,
            description: "Lorem ipsum dolor sit amet.",
            rating: 4.7,
        },
    ]);

    return (
        <main>
            <div className={featured} id="menu">
                <div className={container}>
                    <div className={side_padding}>
                        <div style={{ "--horizontal-space": "4em" }} className={featured__title}>
                            <h3>Check out these lavish dishes from our menu</h3>
                            <div>
                                <p>
                                    These dishes were delicately made by our top chefs that served us through the years, catered for the satisfaction
                                    of our dear customers.
                                </p>
                                <a href="#" className={link}>
                                    Learn More >
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={side_padding}>
                        <div className={cx(menu, flex_row)}>
                            {featured.map((recipe) => (
                                <Card 
                                    recipeName={recipe.recipeName} 
                                    image={recipe.image} 
                                    description={recipe.description} 
                                    rating={recipe.rating} 
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={bestsellers}>
                    <div className={side_padding}>
                        <div className={container}>
                            <h3 className={bestsellers__header}>Our bestsellers</h3>
                            <div className={flex_row}>
                                {best.map((recipe) => (
                                    <Card
                                        recipeName={recipe.recipeName}
                                        image={recipe.image}
                                        description={recipe.description}
                                        rating={recipe.rating}
                                    />
                                ))}
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
