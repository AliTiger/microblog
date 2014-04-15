/*
* 博客
*/
var mongodb = require('mongodb');
var server = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var db = new mongodb.Db('boke', server, {safe:true});

exports.homepage = function( req, res, next ){
	var params = {	curpage	:	'homepage'};

	db.open(function( err ){
		if( err ){
			console.log('open error:',err);
		} else {
			db.createCollection('articles', {safe:true}, function(err, collection){
				return res.render('boke/homepage',params);
			});
		}
	});
}

exports.articles = function( req, res ){
	var params = {	curpage	:	'articles'};
	db.createCollection('articles', {safe:true}, function(err, collection){
		if(err){
			console.log('createCollection error:',err);
		}else{
			collection.find().toArray(function(err,articles){
				params.articles = articles;
				return res.render('boke/articles',params);
			});
		}
	});
}
exports.post= function( req, res ){
	var cur_page = req.params.cur_page;
	var params = {	curpage	:	cur_page	};
	if(cur_page == 'new_article'){
		var article = req.body;
		db.createCollection('articles', {safe:true}, function(err, collection){
			if(err){
				console.log('createCollection error:',err);
			}else{
				//console.log('collection db:',collection);
				collection.insert(article,{safe:true},function(err,result){
					console.log('result',result);	
					return res.render('boke/'+cur_page,params);
				});
			}
		});
	}	

}
exports.article = function( req, res, next ){
	var title = req.params.title;
	var params = {	curpage	:	'article'};
	db.createCollection('articles', {safe:true}, function(err, collection){
		if(err){
			console.log('createCollection error:',err);
		}else{
			//console.log('collection db:',collection);
			collection.find().toArray(function(err,articles){
				console.log('result',result);	
				params.articles = articles;
				collection.find({title:title},function(err,article){
					params.article = article;
					return res.render('boke/article',params);
				});
			});
		}
	});
}
