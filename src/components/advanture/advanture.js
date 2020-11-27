import React from 'react';

const Advanture = () => {
    return (
        <section className="advanture advanture--second">
            <div className="advanture__wrap container">
                <div className="title">С нами ваш ребёнок...</div>
                <div className="advanture__content">
                    <div className="advanture__text">
                        <ul className="advanture__second-list">
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/reading.png" alt="Развивающие занятия" />
                                </span>
                                <span>Cтанет более внимательным и усидчивым, дисциплинированным и сознательным</span>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/blueprint.png" alt="Ментальная арифметика" />
                                </span>
                                <span>Познакомится с буквами и звуками, цифрами и логикой счёта, будет развивать мелкую моторику и мышление, восприятие, память, внимание и речь</span>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/chat1.png" alt="Логопед" />
                                </span>
                                <span>Научится правильно и красиво говорить</span>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/palette.png" alt="Рисование для детей" />
                                </span>
                                <span>Сможет развить свои таланты и найти путь для самовыражения</span>
                            </li>
                            <li className="advanture__item">
                                <span className="advanture__img">
                                    <img className="advanture__icon" src="images/icons/128/plant.png" alt="Эмоциональный интелект" />
                                </span>
                                <span>Научится экологично выражать свои эмоции и чувства, а также правильно реагировать на эмоции и чувства окружающих</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advanture;
