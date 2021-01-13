import React from 'react';

const Advantages = () => {
    return (
        <section className="advantages">
            <div className="advantages__wrap container">
                <div className="title">Наши преимущества</div>

                <div className="advantages__content">
                    <ul className="advantages__list">
                        <li className="advantages__item">
                            <img className="advantages__item-icon" src="/images/advantages/3.jpg" />
                            <p className="advantages__item-text">428 детей посещали занятия в клубе «Счастье» за время его существования</p>
                        </li>
                        <li className="advantages__item">
                            <img className="advantages__item-icon" src="/images/advantages/1.jpg" />
                            <p className="advantages__item-text">Мы принимаем и понимаем детей такими, какие они есть, бережно относимся к их индивидуальности, помогаем с адаптацией и создаём благоприятные условия для естественного развития</p>
                        </li>
                        <li className="advantages__item">
                            <img className="advantages__item-icon" src="/images/advantages/2.jpg" />
                            <p className="advantages__item-text">80% наших клиентов приводят в клуб своих малышей по рекомендациям от знакомых, которые ранее посещали наши занятия и остались довольны результатами</p>
                        </li>
                        <li className="advantages__item">
                            <img className="advantages__item-icon" src="/images/advantages/4.jpg" />
                            <p className="advantages__item-text">Уже больше 3 лет клуб «Счастье» помогает мамам и папам развивать деток</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Advantages;
