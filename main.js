var Elixir = require('laravel-elixir');

Elixir.ready(function() {
    Elixir.webpack.mergeConfig({
        babel: {
            presets: ['es2015', { modules: false }],
            plugins: ['add-module-exports', 'transform-runtime'],
        },
        module: {
            loaders: [{
                test: /\.vue$/,
                loader: 'vue'
            }]
        }
    });
});
