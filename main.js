var Elixir = require('laravel-elixir');

Elixir.config.js.webpack.loaders.push({
    test: /\.vue$/,
    loader: 'vue'
});

Elixir.config.js.webpack.babel.presets.push(
    'es2015-webpack'
);
