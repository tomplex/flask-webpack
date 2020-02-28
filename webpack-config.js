const path = require('path');

// Babel loader for Transpiling ES8 Javascript for browser usage
const babelLoader = {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [path.resolve(__dirname, '../app')],
    query: { presets: ['es2017'] }
};

// SCSS loader for transpiling SCSS files to CSS
const scssLoader = {
    test: /\.scss$/,
    loader: 'style-loader!css-loader!sass-loader'
};

// URL loader to resolve data-urls at build time
const urlLoader = {
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    loader: 'url-loader?limit=500000'
};

// HTML load to allow us to import HTML templates into our JS files
const htmlLoader = {
    test: /\.html$/,
    loader: 'html-loader'
};

module.exports = {
    entry: {
        index: './src/index.js',
        // home: './src/home.js'
    },
    output: {
        path: path.resolve(__dirname, 'app/static'),
    },
    module: {
        rules: [babelLoader, scssLoader, urlLoader, htmlLoader,
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};