var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

var api = require('./api');
var app = express();
var allowedUrl = [
    '/api/getAllCourses',
    '/api/getAllSections',
    '/api/getAllCourseItems',
    '/api/getOneSection',
    '/api/addCourse',
    '/api/addSemester',
    '/api/getAllSemesters',
    '/api/getOneSemester'
];  

//bodyParser used so we can read post variables sent in body
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

//cors allow cross origin requests by putting a header Allow-Control-Cross-Origin in every req response
app.use(cors());

app.get('/acessdenied', function(req,res){
	res.sendFile(path.join(__dirname + '/access_denied.html'));
});

app.all('*', function(req,res,next){
    //deny all request unless they enter specific params
    var reqParts = req.url.split("?");
	if(allowedUrl.indexOf(reqParts[0]) == -1){
        console.log(req.url);
		res.redirect('/acessdenied');
	}
	
	next();
});

//this get request will be trigger when the user types: www.devsolutions.tech:3000/api/* or 45.79.75.175:3000/api/*
// Functional
app.get('/api/getAllCourses', function(req, res){
	api.getAllDocuments('semesters',res); //* change me back to courses!
});

app.get('/api/getAllSections', function(req,res){
	api.getAllDocuments('sections',res);
});

app.get('/api/getAllCourseItems',function(req,res) {
    api.getAllDocuments('courseitems',res);
});

// Not implemented
app.post('/api/addCourse', function(req,res){ 
    
	api.insertOneDocument('courses', req.body, res);
});

app.post('/api/addSemester', function(req, res){
	api.insertOneDocument('semesters', req.body, res);
});

// WIP -- won't receive parameters properly
app.get('/api/getOneSection', function(req,res) {
   //console.log(req.query.user_id);
   // console.log(req.user_id);
   console.log(req.query.id);
    api.getAllDocuments('semesters',res);
});

app.post('/api/getOneSection2',function(req,res) {
    api.getAllDocuments('semesters',res);
});

app.get('/api/getOneSemester', function(req,res){
    //console.log(req.query.user_id);
    api.getOneDocument('semesters',res,req.query.user_id);
});






app.listen(3000, function(){
	console.log('Server started on Port 3000...');
});