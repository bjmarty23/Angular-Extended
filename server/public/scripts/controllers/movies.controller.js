
app.controller('MoviesController', ['CollectionService', function(CollectionService){
    console.log('MoviesController loaded'); 
    const self = this;
    self.movies = CollectionService.movies;
    self.assignments = CollectionService.assignments;

    self.movieToAdd = {name:'', date:'', length:'', genre_id:''};
    console.log('line 7');

    self.addNewMovie = CollectionService.addNewMovie 
        // CollectionService.addNewMovie(newMovie);

        self.getMovies =  CollectionService.getMovies

    self.removeMovie= function (movies) {
        // CollectionService.removeMovie(movies.Id);
        console.log('in delete')
    }
}]);
