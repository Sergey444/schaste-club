import React, {useEffect} from 'react';
import MetaTags from 'react-meta-tags';

const PricePage = () => {

    useEffect(() => {
        document.querySelector(`#schaste-app`).style.backgroundImage = `url(/images/price/bg-price.png)`;

        return function cleanup() {
            document.querySelector(`#schaste-app`).style.backgroundImage = `none`;
        };
    });

    return (
        <section className="price">
            <MetaTags>
                <title>Стоимость занятий детского центра Счастье</title>
                <meta name="description" content="Детский сад, развитие для ребенка в Тюмени, развивающие занятия восточный, логопед, день рождение для ребёнка, детский праздник" />
            </MetaTags>
            <h1 className="title__hidden">Детский сад, восточный микрорайон</h1>
            <div className="price__wrapper container">
                <table className="price_table">
                    <caption>Прайс-лист<br/> Детского клуба «Счастье»</caption>
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Возраст</th>
                            <th>Посещение занятий</th>
                            <th>Цена за разовое занятие</th>
                            <th>Абонемент</th>
                            <th>Кол-во занятий в месяц</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="2" rowSpan="4">
                                МИНИ-САД <br/> 1,8 - 4 лет
                            </td>
                            <td>Адаптация 2 (часа)</td>
                            <td>350 руб.</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>2 раза в неделю (4 часа)</td>
                            <td rowSpan="3">500 руб.</td>
                            <td>450 * 8 = 3600 руб.</td>
                            <td>8 занятий</td>
                        </tr>
                        <tr>
                            <td>3 раза в неделю (4 часа)</td>
                            <td>400 * 12 = 4800 руб.</td>
                            <td>12 занятий</td>
                        </tr>
                        <tr>
                            <td>5 раз в неделю (4 часа)</td>
                            <td>325 * 20 = 6500 руб.</td>
                            <td>20 занятий</td>
                        </tr>

                        <tr>
                            <td colSpan="2" rowSpan="2">
                            ТВОРЧЕСКАЯ <br/> МАСТЕРСКАЯ <br/> «Счастье в ладошках» <br/> (3-8 лет)
                            </td>
                            <td>-</td>
                            <td rowSpan="2">400 руб.</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td> УМНИЧКА <br/> (комплексное развитие)</td>
                            <td>4 - 6 лет</td>
                            <td>2 раза в неделю <br/> (1 час) </td>
                            <td>400 руб.</td>
                            <td>350 * 8 = 2800 руб.</td>
                            <td>8 занятий</td>
                        </tr>

                        <tr>
                            <td colSpan="2" rowSpan="2">
                            ЛОГОПЕД <br/> 2+
                            </td>
                            <td>2 раза в неделю <br/> (30 мин/занятие)</td>
                            <td rowSpan="2">500 руб.</td>
                            <td>450 * 8 = 3600 руб.</td>
                            <td>8 занятий</td>
                        </tr>
                        <tr>
                            <td>3 раза в неделю <br/> (30 мин/занятие)</td>
                            <td>400 * 12 = 4800 руб.</td>
                            <td>12 занятий</td>
                        </tr>

                        <tr>
                            <td>КЛУБ БУДУЩЕГО <br/> ПЕРВОКЛАШКИ</td>
                            <td>6+</td>
                            <td>2 раза в неделю <br/>(1 час) </td>
                            <td>500 руб.</td>
                            <td>400 * 8 = 3200 руб.</td>
                            <td>8 занятий</td>
                        </tr>

                        <tr>
                            <td>ВОКРУГ СВЕТА<br/> ЗА 80 ДНЕЙ</td>
                            <td>5+</td>
                            <td>1 раз в неделю</td>
                            <td>400 руб.</td>
                            <td>-</td>
                            <td>4 занятия</td>
                        </tr>

                        <tr>
                            <td>ГРУППА<br/> «ПТЕНЧИКИ»</td>
                            <td>9 мес. - 1,5 лет</td>
                            <td>2 раза в неделю <br/>(1 час)</td>
                            <td>400 руб.</td>
                            <td>350 * 8 = 2800 руб.</td>
                            <td>8 занятий</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default PricePage;
