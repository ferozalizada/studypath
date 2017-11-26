import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppSettings } from '../classes/app-settings';
import { Semester } from '../classes/semester';

import { Course } from '../interfaces/course';
import { RequestStatus } from '../interfaces/request-status';

@Injectable()
export class ApiRequestsService {

  results: string[];

  constructor(private http: HttpClient) {}

  getCourse(){
    //To code later, needs some filter for the query
  }

  getAllCourses(){
    this.http.get<Course>(AppSettings.constants.API_ENDPOINT + '/getAllCourses').subscribe(data => { 
      this.results = data.results
      console.log(this.results);
    });
    //return this.results;
  }

  addCourse(){
    //To code later
  }

  addManyCourses(){
    //To code later
  }

  getSemester(){
    //To code later, needs some filter for the query
  }

  getAllSemesters(){
    this.http.get<Semester>(AppSettings.constants.API_ENDPOINT + '/getAllSemesters').subscribe(data => {
      console.log(data.getSeason() + " " + data.getYear());
    });
  }

  addSemester(semester:Semester){
    this.http.post<RequestStatus>(AppSettings.constants.API_ENDPOINT + '/addSemester', semester).subscribe(status => {
      console.log(status.success + ", " + status.message);
    });
  }

  addManySemesters(semesters:Semester[]){
    //To code later
  }

}
