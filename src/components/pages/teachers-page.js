import React from 'react';

const TeachersPage = () => {

    return (
        <section className="teachers-slider">
            <div className="teachers-slider__wrapper container">
                <div className="rs-slider__wrap">
                    <div className="rs-slider__list">
                        <div className="rs-slider__item  rs-slider__item--front">
                            <div data-detail="/teachers/lera/" className="rs-slider__img" style={{backgroundImage: `url("/images/teachers/lera.jpg")`}}></div>
                        </div>
                        <div className="rs-slider__item  rs-slider__item--left-middle">
                            <div data-detail="/teachers/jane/" className="rs-slider__img" style={{backgroundImage: `url("/images/teachers/jane.jpg")`}}></div>
                        </div>
                        <div className="rs-slider__item  rs-slider__item--left-back ">
                            <div data-detail="/teachers/nasty/" className="rs-slider__img" style={{backgroundImage: `url("/images/teachers/nasty.jpg")`}}></div>
                        </div>
                        <div className="rs-slider__item">
                            <div data-detail="/teachers/sveta/" className="rs-slider__img" style={{backgroundImage: `url("/images/teachers/sveta.jpg")`}}></div>
                        </div>
                        <div className="rs-slider__item  rs-slider__item--right-back">
                            <div data-detail="/teachers/anna/" className="rs-slider__img" style={{backgroundImage: `url("/images/teachers/anna.jpg")`}}></div>
                        </div>
                        <div className="rs-slider__item  rs-slider__item--right-middle ">
                            <div data-detail="/teachers/anna/" className="rs-slider__img" style={{backgroundImage: `url("/images/teachers/anna_logo.jpg")`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeachersPage;
