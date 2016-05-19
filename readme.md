# Laravel Elixir Vue Integration

## Step 1: Install

```
npm install laravel-elixir-vue --save-dev
```

## Step 2: Gulpfile.js

```
var elixir = require('laravel-elixir');

require('laravel-elixir-vue');

elixir(function(mix) {
    mix.scripts('main.js'); // resources/assets/js/main.js
});
```
