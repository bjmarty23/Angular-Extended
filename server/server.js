let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.use(bodyParser.json());






app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});