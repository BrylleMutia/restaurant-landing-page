import React from "react";
import { menu__card, menu__img, menu__name, menu__rating } from "./Card.module.css";

const Card = ({ recipeName, image, description, rating }) => {
    return (
        <div className={menu__card}>
            <img src={image} alt="menu-card" className={menu__img} />
            <div className={menu__name}>
                <div>
                    <h5>{recipeName}</h5>
                    <p>{description}</p>
                </div>
                <div className={menu__rating}>{rating}</div>
            </div>
        </div>
    );
};

export default Card;
