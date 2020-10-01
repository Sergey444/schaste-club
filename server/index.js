/* eslint-disable no-undef */
process.env.BABEL_ENV = `development`;
process.env.NODE_ENV = `development`;

require(`ignore-styles`);

require(`@babel/register`)({
    ignore: [/(node_modules)/],
    presets: [`@babel/preset-env`, `@babel/preset-react`]
});

require(`@babel/polyfill`);

require(`./server`);


