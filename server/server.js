let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const movieRouter= require('./routes/movies.router.js');
const genreRouter= require('./routes/genre.router.js');

let PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.use(bodyParser.json());


app.use('/genre', genreRouter)
app.use('/movies', movieRouter);
// app.use('/', );



app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});
