console.log('js loaded');

let app = angular.module('CollectionApp', []);

app.cotroller('CollectionController', ['http', function(http){
    console.log('CollectionController loaded'); 

    let self = this;
    let collectionArray= [];

//Get 
self.get= function(){
    console.log('IN GET');
    $http ({
        method: 'GET',
        url: '/get',
    }).then(function(response){
        console.log('IN then GET', response);
    } ).then(function(error) {
        console.log('error', error);
    })
}





}])

//create route when transfering controller into own file
// app.config(function($routeProvider) {
//     console.log('config loaded');
// });


