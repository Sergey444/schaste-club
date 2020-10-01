// webpack.config.js

const path = require(`path`);
const CopyPlugin = require(`copy-webpack-plugin`);

const WebpackAssetsManifest = require(`webpack-assets-manifest`);
// const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);

module.exports = (env, argv) => {
    return {
        entry: `./src/index.js`,
        output: {
            filename: `main.js`,
            path: path.join(__dirname, `build`), // eslint-disable-line
            // publicPath: `/`
        },
        devServer: {
            contentBase: path.join(__dirname, `public`), // eslint-disable-line
            historyApiFallback: true,
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
                    use: [
                        {
                            loader: `style-loader`,
                        },
                        {
                            loader: `css-loader?url=false`,
                        },
                        {
                            loader: `less-loader`,
                            options: {
                                lessOptions: {
                                    strictMath: true,
                                },
                            },
                        },
                    ],
                },

            ],
        },
        devtool: argv.mode === `development` ? `source-map` : false,
        plugins: [

            // new MiniCssExtractPlugin({
            //     filename: `./css/style.css`
            // }),

            new WebpackAssetsManifest({
                output: `asset-manifest.json`
            }),

            new CopyPlugin({
                patterns: [
                    {from: `public`, to: `./`}
                ]
            }),
        ]
    };
};
