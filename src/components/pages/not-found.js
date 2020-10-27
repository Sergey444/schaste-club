import React from 'react';
import MetaTags from 'react-meta-tags';

const NotFound = () => {
    return (
        <section className="about">
            <MetaTags>
                <title>Детский сад Тюмень, страница не найдена</title>
                <meta name="description" content="Детский сад, развитие для ребенка в Тюмени, развивающие занятия восточный, логопед, день рождение для ребёнка, детский праздник" />
            </MetaTags>
            <h1 className="title__hidden">Детский сад, страница не найдена</h1>
            <div className="about__wrapper container">
                <div className="title">Страница не найдена...</div>
            </div>
        </section>
    );
};

export default NotFound;
