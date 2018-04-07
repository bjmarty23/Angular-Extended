app.service('CollectionService', ['$http', function($http) {
    console.log('CollectionService loaded');
    const self = this;

    // assigns a genre to a movie
    self.assignments = { list: [] };
    self.movies = { list: [] };

// add new movie to Database
    self.addNewMovie = function(movieToAdd) {
        console.log('inside sdd move');
        $http({
            method: 'POST',
            url: '/movies',
            data: movieToAdd
        }).then((response) => {
            console.log('success adding movie');
            self.getMovies();
        }).catch((error) => {
            console.log('error posting new movie', error);
        });
    }


    //Get movies from database 
self.getMovies = function(){
    console.log('IN GET');
    $http ({
        method: 'GET',
        url: '/movies'/// changed from get to movies
    }).then(function(response){
        console.log('IN then GET', response);
        self.movies.list=response.data;
        console.log(response.data);
    }).catch(function(error) {
        console.log('error');
    })
}
self.getMovies();
}]);