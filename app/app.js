angular.module('woundCare',  ['ui.router','ngAnimate', 'ngSanitize', 'ui.bootstrap','restangular']);

require('./directives');
require('./services');
require('./controllers');
require('./app.route.config');
require('./restEndpoint');