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
                    <Route path="/policy" component={PolicyPage} />
                    <Route path="/offer" component={OfferPage} />

                    <Route path="/contacts" component={() => (<ContactsPage />)} />
                    <Route path="/gallery" component={GalleryPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/price" component={PricePage} />
                    <Route path="/news" component={NewsPage} />
                    <Route path="/" component={MainPage} exact/>
                    <Route render={() => <h2 className="title">Страница не найдена</h2>} status={404} />
                </Switch>
            </main>
            <Footer />
        </div>
    );
};

export default App;
