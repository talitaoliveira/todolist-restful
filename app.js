const   mongoose    = require('mongoose'),
        bodyParser  = require('body-parser'),
        express     = require('express'),
        app         = express(),
        port        = process.env.PORT || 3000,
        database    = require('./config/database');

mongoose.connect(database.urlDev);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res) {
    res.status(404).json({error: 'Not Found'});
})

app.listen(port);

console.log(`Service is listening on port: ${port}`);