import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { URLSearchParams } from '@angular/http';

import { AppSettings } from '../classes/app-settings';
import { Semester } from '../classes/semester';
import { Course } from '../classes/course';
import { Section } from '../classes/section';
import { CourseItem } from '../classes/courseItem';

import { RequestStatus } from '../interfaces/request-status';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiRequestsService {

constructor(private http: HttpClient) {}

  

  results: string[];
  
  // Functions for returning ALL elements in a collection
  
  getAllCourses(callback){
    this.http.get<Course>(AppSettings.constants.API_ENDPOINT + '/getAllCourses').subscribe(data => { 
      callback(data);
    });
  }
  
  getAllSections(callback){
    this.http.get<Section>(AppSettings.constants.API_ENDPOINT + '/getAllSections').subscribe(data => { 
      callback(data);
    });
  }
  
  getAllCourseItems(callback){
    this.http.get<CourseItem>(AppSettings.constants.API_ENDPOINT + '/getAllCourseItems').subscribe(data => { 
      callback(data);
    });
  }
  
  // Functions for returning specific elements from a collection
  /*
  
    Having trouble figuring out how to pass parameters (namely id for which section to grab)
    without api.js encourtering a fatal error
  
  */
  
  getSectionByCourse2(callback) {
    var url = AppSettings.constants.API_ENDPOINT + '/getOneSection2'
    var data = {user_id:1};
    this.http.post<Section>(url, data).subscribe(data=> {
        callback(data);
    });
  }
  
  getSectionByCourse(callback){
    //let params = new HttpParams();
    //params = params.append('user_id',1);
    
    //this is how to pass params in get request 
    //DONT USE THIS IN POST SINCE ITS GOING TO SHOW PARAMS IN URL
    this.http.get<Section>(AppSettings.constants.API_ENDPOINT + '/getOneSection', {
      params:new HttpParams().set('id','LMAO')
    }).subscribe(data => {
      callback(data);
    });
  }

}