/**
 * karma base config
 */

const webpackConfig = {
    mode: 'development',
    resolve: {
        alias: {

        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        
    ],
    devtool: 'inline-source-map'
};

module.exports = {
    frameworks: ['mocha', 'chai'],

    files: [
        './index.js'
    ],
    
    preprocessors: {
        './index.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,
    webpackMiddleware: {
        noInfo: true
    },

    browsers: ["Chrome"],

    reporters: ['progress'],

    plugins: [
        'karma-mocha',
        'karma-chai',
        'karma-sourcemap-loader',
        'karma-webpack'
    ]
}