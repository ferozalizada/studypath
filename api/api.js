var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
  
//Connection URL
var url = 'mongodb://localhost:27017/studypath';

//export functions to be access by any file who require/include api.js
var exports = module.exports = {};

exports.testConnection = function(){
	MongoClient.connect(url, function(err, db) {
		if(err) console.log("Connection to db failed!");

		console.log("Connected successfully to db");
		db.close();
	});
}

exports.insertOneDocument = function(collectionName, jsonObj, res){
	MongoClient.connect(url, function(err, db) {
		db.collection(collectionName).insertOne(jsonObj).then(function(r) {
			assert.equal(1, r.insertedCount); //test
			db.close();

			res.json( {success: true, message: "inserted successfully"} ); //json response
		}).catch(function(err){
			res.json( {success: false, message: err} ); //json response
		});
	});
}

exports.getAllDocuments = function(collectionName, res){
	MongoClient.connect(url, function(err,db){
            db.collection(collectionName).find({}).toArray(function(err,docs){
                assert.equal(err, null); //test
                db.close();

                res.json( {results: docs} ); //json response
            });
	});
};

exports.getMatchingDocumentsWithString = function(collectionName, res, property, value){
	MongoClient.connect(url, function(err,db){
            query = {};
            query[property] = value;
            db.collection(collectionName).find(query).toArray(function(err,docs){
                assert.equal(err, null); //test
                db.close();
                res.json( {results: docs} ); //json response
            });
	});
};

exports.getMatchingDocumentsWithInt = function(collectionName, res, property, value){
	MongoClient.connect(url, function(err,db){
            query = {};
            query[property] = parseInt(value);
            db.collection(collectionName).find(query).toArray(function(err,docs){
                assert.equal(err, null); //test
                db.close();
                res.json( {results: docs} ); //json response
            });
	});
};