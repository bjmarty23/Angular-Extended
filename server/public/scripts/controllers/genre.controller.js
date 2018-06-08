
app.controller('GenreController', ['CollectionService', function(CollectionService){
    console.log('GenreController loaded'); 
    const self = this;
    self.genre = CollectionService.genre;
    self.assignments = CollectionService.assignments;

    self.genreToAdd = {genre:''};
    console.log(self.genre);

    self.addNewGenre = CollectionService.addNewGenre

    self.getGenre =  CollectionService.getGenre

    self.removeGenre= function (genre) {
        CollectionService.deleteGenre(genre.id);
        console.log('in delete', self.genre)
    }
}]);
