import React from 'react';

import TopBanner from '../top-banner';
import Directions from '../directions';
import AdvantureWhite from '../advanture-white';
import Advanture from '../advanture';
import Advantages from '../advantages';
import Reviews from '../reviews';

// import Envelope from '../envelope';

import MetaTags from 'react-meta-tags';

const MainPage = () => {

    return (
        <React.Fragment>

            <MetaTags>
                <title>Детский развивающий центр в Тюмени, центр развития в восточном | Счастье</title>
                <meta name="description" content="Детский центр Счастье, занятия в детском саду, с логопедом, минисад и подготовка к школе, детский сад, ребенок развитие." />
            </MetaTags>

            <TopBanner />
            <div className="directions-green-line"></div>
            <Directions />

            <AdvantureWhite />
            <Advantages />
            <Advanture />
            <Reviews />

            {/* <Envelope /> */}

        </React.Fragment>
    );
};

export default MainPage;
