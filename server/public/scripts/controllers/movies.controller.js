
app.controller('MoviesController', ['CollectionService', function(CollectionService){
    console.log('MoviesController loaded'); 
    const self = this;
    self.movies = CollectionService.movies;
    self.assignments = CollectionService.assignments;

    self.movieToAdd = {name:'', date:'', length:'', genre_id:''};
    console.log(self.movies);

    self.addNewMovie = CollectionService.addNewMovie 
        // CollectionService.addNewMovie(newMovie);

    self.getMovies =  CollectionService.getMovies

    self.removeMovie= function (movies) {
        CollectionService.deleteMovie(movies.id);
        console.log('in delete', self.movies)
    }
    self.genre = CollectionService.genre;
}]);
