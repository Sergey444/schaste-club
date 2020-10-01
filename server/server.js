/* eslint-disable no-undef */
/* eslint-disable no-console */
import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/components/app';

const app = express();
const PORT = 9000;

app.use(`^/$`, (request, responce) => {
    fs.readFile(path.resolve(`./build/index.html`), `utf-8`, (err, data) => {
        if (err) {
            console.log(err);
            return responce.status(500).send(`Some error happened!!!`);
        }
        return responce.send(
            data.replace(
                `<div id="schaste-app">`,
                `<div id="schaste-app">${ReactDOMServer.renderToString(<App />)}</div>`
            )
        );
    });
});

app.use(express.static(path.resolve(__dirname, `...`, `build`)));

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});
