
var express = require('express');

var app = express();

var mongojs = require('mongojs');

//Declare Mongo DB and Collection names
var db = mongojs('test', ['usda1']);

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname));

//app.set('jsonp callback name', 'callback');

app.get('/searchtool', function(req,res){
	
	res.sendFile(__dirname + '/searchtool.html');
	
});

app.get('/getList', function(req,res){
	
	console.log('Pulling Mongo data from DB now...');
	
	var superQuery = { $or: [{title: new RegExp(req.query.searchterm, 'i')}, {authors: new RegExp(req.query.searchterm, 'i')},
		{subjects: new RegExp(req.query.searchterm, 'i')}, {agid: new RegExp(req.query.searchterm)}]};
	
	//var query = { title: new RegExp(req.query.searchterm, 'i') };
  
  db.usda1.find(superQuery,{},{limit:10}, function(err, docs){
    
	console.log(req.query.searchterm);
  
    console.log(docs);
	
	//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	//res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
	res.send(docs);
  
  });
	
});

app.get('/getTitleList', function(req,res){
	
	console.log('Pulling Mongo data from DB now...');
	
	var query = {title: new RegExp(req.query.searchterm, 'i')};
  
  db.usda1.find(query,{},{limit:10}).sort({title:1}, function(err, docs){
    
	console.log(req.query.searchterm);
  
    console.log(docs);
	
	//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	//res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
	res.send(docs);
  
  });
	
});

app.get('/getAuthorsList', function(req,res){
	
	console.log('Pulling Mongo data from DB now...');
	
	var query = {authors: new RegExp(req.query.searchterm, 'i')};
  
  db.usda1.find(query,{},{limit:10}).sort({authors:1}, function(err, docs){
    
	console.log(req.query.searchterm);
  
    console.log(docs);
	
	console.log(err);
	
	//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	//res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
	res.send(docs);
  
  });
	
});

app.get('/getPubagList', function(req,res){
	
	console.log('Pulling Mongo data from DB now...');
	
	var query = {agid: new RegExp(req.query.searchterm)};
  
  db.usda1.find(query,{},{limit:10}).sort({agid:1}, function(err, docs){
    
	console.log(req.query.searchterm);
  
    console.log(docs);
	
	console.log(err);
	
	//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	//res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
	res.send(docs);
  
  });
	
});

app.get('/getSubjectsList', function(req,res){
	
	console.log('Pulling Mongo data from DB now...');
	
	var query = {subjects: new RegExp(req.query.searchterm, 'i')};
  
  db.usda1.find(query,{},{limit:10}).sort({subjects:1}, function(err, docs){
    
	console.log(req.query.searchterm);
  
    console.log(docs);
	
	console.log(err);
	
	//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	//res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
	res.send(docs);
  
  });
	
});

app.listen(5000);

console.log('Server running on port 5000!');