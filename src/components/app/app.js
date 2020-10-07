import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {ContactsPage, MainPage, PricePage, GalleryPage, AboutPage, NewsPage, PolicyPage, OfferPage} from '../pages';

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
                    <Route path="/policy" component={PolicyPage} exact/>
                    <Route path="/offer" component={OfferPage} exact/>

                    <Route path="/contacts" component={() => (<ContactsPage />)} exact/>
                    <Route path="/gallery" component={GalleryPage} exact/>
                    <Route path="/about" component={AboutPage} exact/>
                    <Route path="/price" component={PricePage} exact/>
                    <Route path="/news" component={NewsPage} exact/>
                    <Route path="/" component={MainPage} exact/>
                    <Route render={() => <h2 className="title">Страница не найдена</h2>} status={404} />
                </Switch>
            </main>
            <Footer />
        </div>
    );
};

export default App;
