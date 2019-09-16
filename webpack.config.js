const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,"public"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            options: {
                presets: ['react']
            },
            test:/\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public')
    }
};