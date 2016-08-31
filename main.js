var Elixir = require('laravel-elixir');

Elixir.ready(function() {
    Elixir.webpack.mergeConfig({
        babel: {
            presets: ['es2015'],
            plugins: ['add-module-exports', 'transform-runtime'],
        },
        module: {
            loaders: [
                {
                    // use vue-loader for *.vue files
                    test: /\.vue$/,
                    loader: 'vue'
                },
                {
                    // use babel-loader for *.js files
                    test: /\.js$/,
                    loader: 'babel',
                    // important: exclude files in node_modules
                    // otherwise it's going to be really slow!
                    exclude: /node_modules/
                }
            ]
        }
    });
});
