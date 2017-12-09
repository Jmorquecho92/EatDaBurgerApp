var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();
var port = 3000;
var port = process.env.PORT;


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

app.get('/', function(req,res){
	res.render('index');
});

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(process.env.PORT || 3000);