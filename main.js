var Elixir = require('laravel-elixir');

Elixir.webpack.addLoader({
    test: /\.vue$/,
    loader: 'vue'
});
