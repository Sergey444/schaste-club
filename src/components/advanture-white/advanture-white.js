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
                                <p>Уютная атмосфера, в которой ребёнку точно будет комфортно</p>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/chat.png" alt="Мини сад" />
                                </span>
                                <p>Маленькие группы до 12 человек или индивидуальные занятия на ваш выбор</p>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/puzzle1.png" alt="Творческое развитие" />
                                </span>
                                <p>Родители, которые водят своих деток в клуб "Счастье" отмечают первые положительные результаты уже через несколько занятий</p>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/hands.png" alt="Занятия для маленьких" />
                                </span>
                                <p>Занятия и мероприятия для деток с 1 года до 7 лет</p>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/mortarboar.png" alt="Преподаватели" />
                                </span>
                                <p>Талантливые специалисты, которые знают своё дело, любят и понимают детей, регулярно проходят обучение</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantureWhite;
