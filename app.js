
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var boke = require('./routes/boke.js');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/:cur_page', routes.index);
app.get('/boke/homepage', boke.homepage);
app.get('/boke/articles', boke.articles);
app.get('/boke/article/:title', boke.article);
app.post('/boke/:cur_page', boke.post);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
