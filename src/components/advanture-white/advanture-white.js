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
                                <span>Уютная атмосфера, в которой ребёнку точно будет комфортно</span>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/chat.png" alt="Мини сад" />
                                </span>
                                <span>Маленькие группы до 12 человек или индивидуальные занятия на ваш выбор</span>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/puzzle1.png" alt="Творческое развитие" />
                                </span>
                                <span>Родители, которые водят своих деток в клуб "Счастье" отмечают первые положительные результаты уже через несколько занятий</span>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/hands.png" alt="Занятия для маленьких" />
                                </span>
                                <span>Занятия и мероприятия для деток с 1 года до 7 лет</span>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/mortarboar.png" alt="Преподаватели" />
                                </span>
                                <span>Талантливые специалисты, которые знают своё дело, любят и понимают детей, регулярно проходят обучение</span>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantureWhite;
