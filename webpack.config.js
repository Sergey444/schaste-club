// webpack.config.js

const path = require(`path`);
const CopyPlugin = require(`copy-webpack-plugin`);
// const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);

module.exports = (env, argv) => {
    return {
        entry: `./src/index.js`,
        output: {
            filename: `main.js`,
            path: path.join(__dirname, `build`) // eslint-disable-line
        },
        devServer: {
            contentBase: path.join(__dirname, `public`), // eslint-disable-line
            compress: false,
            open: true,
            port: 1337,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: `babel-loader`,
                    },
                },
                {
                    test: /\.less$/,
                    use: [`css-loader`, `less-loader`], // compiles Less to CSS
                }
                // {
                //     test: /\.less$/,
                //     use: [
                //         // {
                //         //     loader: MiniCssExtractPlugin.loader,
                //         //     options: {
                //         //         hmr: argv.mode === `development`,
                //         //         reloadAll: true,
                //         //     }
                //         // },
                //         {

                //             loader: `css-loader`
                //         },
                //         {
                //             loader: `postcss-loader`,
                //             options: {
                //                 sourceMap: true,
                //                 config: {
                //                     path: `./postcss.config.js`
                //                 }
                //             }
                //         },
                //         {
                //             loader: `less-loader`
                //         }
                //     ],
                // }
            ],
        },
        devtool: `source-map`,
        plugins: [

            // new MiniCssExtractPlugin({
            //     filename: `./css/style.css`
            // }),

            new CopyPlugin({
                patterns: [
                    {from: `public`, to: `./`}
                ]
            }),
        ]
    };
};
