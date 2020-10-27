import React from 'react';
import {Switch, Route} from 'react-router-dom';

import routes from '../../servises/routes';

import {NotFound} from '../pages';

import TopMenu from '../top-menu';
import MobileMenu from '../mobile-menu';
import Footer from '../footer';


const App = () => {

    return (
        <div className="main-layout">
            <MobileMenu />
            <TopMenu />

            <main id="pagecontent">
                <Switch>
                    {routes.map((route, index) => (
                        <Route key={`route-${index}`} {...route} exact/>
                    ))}
                    <Route path="*" component={NotFound} status={404}/>
                </Switch>
            </main>
            <Footer />
        </div>
    );
};

export default App;
