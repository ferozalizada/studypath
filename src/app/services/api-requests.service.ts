import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { URLSearchParams } from '@angular/http';

import { AppSettings } from '../classes/app-settings';
import { Semester } from '../classes/semester';
import { Course } from '../classes/course';
import { Section } from '../classes/section';
import { Student } from '../classes/student';
import { CourseItem } from '../classes/courseItem';

import { RequestStatus } from '../interfaces/request-status';

import 'rxjs/add/operator/map';

class Response {
    results:string[];
}

@Injectable()
export class ApiRequestsService {

constructor(private http: HttpClient) {}

  results: string[];
  
  /* To do: add error handling for if databases are empty or if there are no results for specific query */
  
  // Functions for returning ALL documents in a collection
  getAllStudents(callback) {
    this.http.get<Response>(AppSettings.constants.API_ENDPOINT + '/getAllStudents').subscribe(data => {
      callback(data.results);
    });
  }
  
  getAllCourses(callback){
    this.http.get<Response>(AppSettings.constants.API_ENDPOINT + '/getAllCourses').subscribe(data => { 
      callback(data.results);
    });
  }
  
  getAllSections(callback){
    this.http.get<Response>(AppSettings.constants.API_ENDPOINT + '/getAllSections').subscribe(data => { 
      callback(data.results);
    });
  }
  
  getAllCourseItems(callback){
    this.http.get<Response>(AppSettings.constants.API_ENDPOINT + '/getAllCourseItems').subscribe(data => { 
      callback(data.results);
    });
  }
  
  // Functions for returning one document that matches a unique ID
  getStudentById (callback, student_id) {
    this.http.get<Response>(AppSettings.constants.API_ENDPOINT + '/getStudentById', {
      params:new HttpParams().set('student_id',student_id.toString())
    }).subscribe(data => {
      callback(data.results[0]);
    });
  }

  getCourseById (callback, course_id) {
    this.http.get<Response>(AppSettings.constants.API_ENDPOINT + '/getCourseById', {
      params:new HttpParams().set('course_id',course_id.toString())
    }).subscribe(data => {
      callback(data.results[0]);
    });
  }

  getSectionById (callback, sec_id) {
    this.http.get<Response>(AppSettings.constants.API_ENDPOINT + '/getSectionById', {
      params:new HttpParams().set('sec_id',sec_id.toString())
    }).subscribe(data => {
      callback(data.results[0]);
    });
  }
  
  getCourseItemById (callback, courseitem_id) {
    this.http.get<Response>(AppSettings.constants.API_ENDPOINT + '/getCourseItemById', {
      params:new HttpParams().set('courseitem_id',courseitem_id.toString())
    }).subscribe(data => {
      callback(data.results[0]);
    });
  }
  
  // Functions for special parameter-based queries
  
  // Returns array of all sections that belong to a certain course
  getSectionsByCourse(callback, course_id){
    this.http.get<Response>(AppSettings.constants.API_ENDPOINT + '/getSectionsByCourse', {
      params:new HttpParams().set('course_id',course_id.toString())
    }).subscribe(data => {
      callback(data.results);
    });
  }
  
  //  Returns array of all course items that belong to a certain section, given a certain type (LEC, LAB, DGD...)
  getCourseItemsBySection(callback, section_id:number, item_type:string) {
    console.log('Checkpoint 2');
    var params = new HttpParams().set('section_id',section_id.toString());
    params.set('item_type',item_type)
    this.http.get<Response>(AppSettings.constants.API_ENDPOINT + '/getCourseItemsBySection', {
      params
    }).subscribe(data => {
      callback(data.results);
    });
  }
  
  // Functions for inserting document into collection
  addStudent(stu:Student){
    this.http.post<RequestStatus>(AppSettings.constants.API_ENDPOINT + '/addStudent', stu).subscribe(status => {
      console.log(status.success + ", " + status.message);
    });
  }
  
  addCourse(course:Course){
    this.http.post<RequestStatus>(AppSettings.constants.API_ENDPOINT + '/addCourse', course).subscribe(status => {
      console.log(status.success + ", " + status.message);
    });
  }
  
  addSection(sec:Section){
    this.http.post<RequestStatus>(AppSettings.constants.API_ENDPOINT + '/addSection', sec).subscribe(status => {
      console.log(status.success + ", " + status.message);
    });
  }
  
  addCourseItem(courseItem:CourseItem){
    this.http.post<RequestStatus>(AppSettings.constants.API_ENDPOINT + '/addCourseItem', courseItem).subscribe(status => {
      console.log(status.success + ", " + status.message);
    });
  }

}