require('es6-promise').polyfill();

module.exports = {
    entry: ["babel-polyfill", "./src/js/index.js"],
    output: {
        path: "./src",
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        contentBase: "./src",
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]', 'sass']
            },
            {
                test: /\.css$/, 
                loaders: ['style', 'css']
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.(woff|woff2)$/, loader:'url?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
    }
}
