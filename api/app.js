var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

var api = require('./api');
var app = express();
var allowedUrl = [
    '/api/getAllStudents',
    '/api/getAllCourses',
    '/api/getAllSections',
    '/api/getAllCourseItems',
    '/api/getStudentById',
    '/api/getCourseById',
    '/api/getSectionById',
    '/api/getCourseItemById',
    '/api/getSectionsByCourse',
    '/api/getCourseItemsBySection',
    '/api/addStudent',
    '/api/addCourse',
    '/api/addSection',
    '/api/addCourseItem',
    '/api/getNumberOfStudents'
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

//Get all from collection
app.get('/api/getAllStudents',function(req, res){
   api.getAllDocuments('students',res); 
});

app.get('/api/getAllCourses', function(req, res){
	api.getAllDocuments('courses',res); 
});

app.get('/api/getAllSections', function(req,res){
	api.getAllDocuments('sections',res);
});

app.get('/api/getAllCourseItems',function(req,res) {
    api.getAllDocuments('courseitems',res);
});

// Get one from collection by ID
app.get('/api/getStudentById', function(req,res) {
   api.getMatchingDocuments('students',res,'id',parseInt(req.query.student_id));
});

app.get('/api/getCourseById', function(req,res) {
   api.getMatchingDocuments('courses',res,'id',parseInt(req.query.course_id));
});

app.get('/api/getSectionById', function(req,res) {
   api.getMatchingDocuments('sections',res,'id',parseInt(req.query.sec_id));
});

app.get('/api/getCourseItemById', function(req,res) {
   api.getMatchingDocuments('courseitems',res,'id',parseInt(req.query.courseitem_id));
});

// Special parameter-based queries
// Get all sections belonging to a specific course
app.get('/api/getSectionsByCourse', function(req,res) {
    api.getMatchingDocuments('sections',res,'course_id',parseInt(req.query.course_id));
});

// Get all course items belonging to a specific section
app.get('/api/getCourseItemsBySection', function(req,res) {
    api.getMatchingCourseItems('courseitems',res,'section_id',parseInt(req.query.section_id),req.query.item_type);
});

// Add to database
app.post('/api/addStudent', function(req,res){
    api.insertOneDocument('students',req.body,res);
});

app.post('/api/addCourse', function(req,res){
    api.insertOneDocument('courses',req.body,res);
});

app.post('/api/addSection', function(req,res){
    api.insertOneDocument('sections',req.body,res);
});

app.post('/api/addCourseItem', function(req,res){
    api.insertOneDocument('courseitems',req.body,res);
});

// Listening for messages
app.listen(3000, function(){
	console.log('Server started on Port 3000...');
});