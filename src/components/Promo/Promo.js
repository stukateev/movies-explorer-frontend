import React from "react";
import "./Promo.css";
import image from "../../images/text__COLOR_landing-logo.png";

function Promo() {
    return (
        <section className="promo">
                <h1 className="promo__title">
                    Учебный проект студента факультета Веб-разработки.
                </h1>
                <img className='promo__image' src={image} alt='Толи 0, толи С' />
        </section>
    );
}
export default Promo;