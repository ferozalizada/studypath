import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from '../../services/user-authentication.service';

import { ApiRequestsService } from '../../services/api-requests.service';
import { Student } from '../../classes/student';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  studentID:string;

  constructor(private router: Router, 
    private userAuth: UserAuthenticationService,
    private modalService: NgbModal, 
    private apiRequestsService: ApiRequestsService) { }

  ngOnInit() {
  }
  login(studentID:string){
    this.studentID = studentID;
    //check if user exists in the database
    //display loading icon
    //add try catch for id number
    this.apiRequestsService.getStudentById(this.userValidation.bind(this), studentID);
  }
  userValidation(user){
    //stop loading icon
    if(user !== undefined ){
      setTimeout(alert("Welcome:" + user.firstName), 5000);
       //User exists then proceed with login
      console.log(user);
      this.router.navigate(['/scheduler']);
    }else{
      //User does not exist ask if he wants his account to be created
    
    }
    this.router.navigate(['/scheduler']);
  }
  registerUser(e){
    //registers the user
    var studentID = e.target.elements[0].value;
    var firstName = e.target.elements[1].value;
    var lastName = e.target.elements[2].value;
    var startYear = e.target.elements[3].value;
    var endYear = (Number.parseInt(startYear) + 4).toString();
    console.log("Your student id  :"+studentID);

    var newStudent = new Student(Number.parseInt(this.studentID), firstName, lastName);
    newStudent.setStartYear(startYear);
    newStudent.setEndYear(endYear);
    newStudent.addSemester("Fall 2017");
    this.apiRequestsService.addStudent(newStudent);
    this.router.navigate(['/scheduler']);
  }
}
