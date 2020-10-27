/* eslint-disable no-undef */
/* eslint-disable no-console */
import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/components/app';

import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../src/reducers';
import {AppServiceProvider} from '../src/components/app-service-context';
import AppService from '../src/servises/app-service';

import routes from '../src/servises/routes';

const appService = new AppService();

const app = express();
const PORT = 9000;

app.use(`/static`, express.static(`build/static`));
app.use(`/images`, express.static(`build/images`));
app.use(`/fonts`, express.static(`build/fonts`));

app.use(`/`, (request, responce) => {

    const context = {};
    const store = createStore(reducer);

    const is404 = routes.findIndex((item) => item.path === request.url || `${item.path}/` === request.url);
    if (is404 === -1) {
        responce.status(404);
    }

    fs.readFile(path.resolve(`./build/index.html`), `utf-8`, (err, data) => {
        if (err) {
            console.log(err);
            return responce.status(500).send(`Some error happened!!!`);
        }

        // responce.setHeader(`Cache-Control`, `css, max-age=604800`);
        return responce.send(
            data.replace(
                `<div id="schaste-app"></div>`,
                `<div id="schaste-app">${ReactDOMServer.renderToString(
                    <Provider store={store}>
                        <AppServiceProvider value={appService}>
                            <StaticRouter location={request.url} context={context}>
                                <App />
                            </StaticRouter>
                        </AppServiceProvider>
                    </Provider>
                )}</div>`
            )
        );
    });
});

// app.disable(`x-powered-by`);

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});
