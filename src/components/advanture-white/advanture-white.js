import React from 'react';


const AdvantureWhite = () => {
    return (
        <section className="advanture">
            <div className="advanture__wrap container">
                <div className="title">Почему вам понравится в<br /> детском клубе «Счастье»</div>
                <div className="advanture__content">
                    <div className="advanture__text">
                        <ul className="advanture__list">
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/home.png" alt="Детский сад" />
                                </span>
                                <span>Уютная, домашняя атмосфера, в которой ребёнку точно будет комфортно</span>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/chat.png" alt="Мини сад" />
                                </span>
                                <span>Маленькие группы до 10 человек</span>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/puzzle1.png" alt="Творческое развитие" />
                                </span>
                                <span>Комплексное развитие интеллектуальных и творческих способностей</span>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/hands.png" alt="Занятия для маленьких" />
                                </span>
                                <span>Занятия для деток с 9 месяцев до 12 лет</span>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/mortarboar.png" alt="Преподаватели" />
                                </span>
                                <span>Талантливые педагоги, которые знают своё дело, любят и понимают детей</span>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantureWhite;
