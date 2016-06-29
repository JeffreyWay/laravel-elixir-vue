var Elixir = require('laravel-elixir');

Elixir.config.js.webpack.loaders.push({
    test: /\.vue$/,
    loader: 'vue'
});

Elixir.config.js.webpack.babel = {
    presets: ['es2015-webpack'],
    plugins: ['add-module-exports', 'transform-runtime']
};
