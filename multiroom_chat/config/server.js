let express = require('express');
let app = express();
let expressValidation = require('express-validator');
let bodyParser = require('body-parser');
let consign = require('consign');

app.set('view engine','ejs');
app.set('views', './app/views');

app.use( bodyParser.urlencoded( { extended : true } ) );
app.use( expressValidation() );
app.use( express.static('./app/public') );

consign()
    .include('app/routes')
    .then('app/controllers')
    .then('config/dbConnection.js')
    .into(app);

module.exports = app;
