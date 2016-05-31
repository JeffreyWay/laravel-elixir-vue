var Elixir = require('laravel-elixir');

Elixir.config.js.webpack.loaders.push({
    test: /\.vue$/,
    loader: 'vue'
});
