import React from 'react';

import directionsData from '../../servises/directions-data';

import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';
import {Redirect} from 'react-router-dom';

const DirectionPage = (props) => {

    const {directionId} = props.match.params;
    const direction = directionsData.find((item) => item.id === directionId * 1);

    if (!direction) {
        return <Redirect to="/404"/>;
    }

    return (
        <section className="about">
            <MetaTags>
                <title>{direction.title}, восточный, войновка</title>
                <meta name="description" content="Детский сад, развитие для ребенка в Тюмени, развивающие занятия восточный, логопед, день рождение для ребёнка, детский праздник" />
            </MetaTags>
            <h1 className="title__hidden">{direction.title}</h1>
            <div className="about__wrapper container">
                <div className="title">{direction.title}</div>
                <p className="about__text">{direction.description}</p>
            </div>
        </section>
    );
};

DirectionPage.propTypes = {
    match: PropTypes.object,
};

export default DirectionPage;
