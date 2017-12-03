import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from '../../services/user-authentication.service';

import { ApiRequestsService } from '../../services/api-requests.service';
import { Student } from '../../classes/student';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../classes/user';


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
    private newStudent: Student;

  ngOnInit() {
    
  }

  login(studentID:string){
    this.studentID = studentID;
    //check if user exists in the database
    //display loading icon
    //add try catch for id number
    if(this.studentID != "")
    {
      this.apiRequestsService.getStudentById(this.userValidation.bind(this), studentID);
    }
  }

  userValidation(user){
    //stop loading icon
    if(user !== undefined ){
       //User exists then proceed with login
      User.userConnected = user;
      this.userAuth.setUserID(Number.parseInt(this.studentID));
      this.userAuth.setName(user.firstName);
      this.userAuth.setUserLoginStatus();
      this.router.navigate(['/scheduler']);
    }else{
      //User does not exist ask if he wants his account to be created
      alert("User does not exist!");
    }
  }

  addUserIfUnique (stu) {
    if (stu != undefined) {
      this.apiRequestsService.addStudent(this.newStudent);
      alert("Your account has been created");
      //document.getElementById('exampleModel').modal('hide');
    } else {
      alert("A student with this ID already exists!");
    }
  }

  registerUser(e){
    //registers the user
    this.studentID = e.target.elements[0].value;
    var firstName = e.target.elements[1].value;
    var lastName = e.target.elements[2].value;
    var startYear = e.target.elements[3].value;
    if (Number(startYear) > 2000 && Number(startYear) < 2099) {
      var endYear = (Number.parseInt(startYear) + 4).toString();

      if (this.studentID == ""  || firstName == "" || lastName == ""  || endYear == ""   || startYear == "") {
        alert("Please fill out all fields!");
      } else if (Number(this.studentID) > 0) {
        this.newStudent = new Student(Number.parseInt(this.studentID), firstName, lastName);
        this.newStudent.setStartYear(startYear);
        this.newStudent.setEndYear(endYear);
        this.newStudent.addSemester("Fall 2017");
        this.apiRequestsService.getStudentById(this.addUserIfUnique.bind(this),this.studentID);
      } else {
        alert("Student ID can only contain numbers!");
      }
    } else {
      alert ("Year must be a number in this century!");
    }
    }
  }
  
}
