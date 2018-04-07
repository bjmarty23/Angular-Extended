console.log('js loaded');

let app = angular.module('CollectionApp', ['ngRoute']);

//create route when transfering controller into own file
app.config(function($routeProvider) {
    console.log('config loaded');

    $routeProvider
    .when('/', {
        redirectTo:'/movies'
    })
    .when('/genre', {
        templateUrl: 'views/genre.html', 
        controller: 'GenreController as vm'
    })
    .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesController as vm'
    })
    .otherwise( { template: '<h1>404</h1>'});
});


