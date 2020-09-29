import React from 'react';
import ReactDOM from 'react-dom';
import './less/style.less';

import App from './components/app';

import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import {AppServiceProvider} from './components/app-service-context';
import AppService from './servises/app-service';

const appService = new AppService();

ReactDOM.hydrate(

    <Provider store={store}>
        <AppServiceProvider value={appService}>
            <Router >
                <App />
            </Router>
        </AppServiceProvider>
    </Provider>

    , document.getElementById(`schaste-app`));

