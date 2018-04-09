app.service('CollectionService', ['$http', function($http) {
    console.log('CollectionService loaded');
    const self = this;

    // assigns a genre to a movie
    self.assignments = { list: [] };
    self.movies = { };
    

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
self.getMovies = function(Movie){
    console.log('IN GET');
    $http ({
        method: 'GET',
        url : 'https://api.themoviedb.org/3/search/movie?api_key=246b82ea160759e257c1d14485027efc&language=en-US&page=1&query=' + Movie
    }).then(function(response){
        console.log('IN then GET', response);
        self.movies=response.data.results[0].title;
        console.log(self.movies);
    }).catch(function(error) {
        console.log('error');
    })
}
// self.addNewMovie();
// self.getMovies();
}]);