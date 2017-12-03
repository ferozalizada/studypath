import { Component, OnInit } from '@angular/core';
import { SemesterSchedule } from '../../../classes/semesterschedule'
import { Student } from '../../../classes/student';
import { StudentCourse } from '../../../classes/studentcourse';
import { ApiRequestsService } from '../../../services/api-requests.service';
import { CourseDataService } from '../../../services/course-data.service';
import { CalendarItem } from '../../../classes/calendaritem';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  changeColor:boolean = true;
  days:string[];
  daysNumber:number[];
  month:string;
  hourName:string;
  hours:string[];
  userLang:number;
  student:Student;
  courses:StudentCourse[];
  prevCourses:StudentCourse[];
  items:CalendarItem[];
  numbers:number[];

  calendarMap:{};

  debugger(data) {
    console.log(data);
  }

  constructor(private api:ApiRequestsService,
  private courseDataService:CourseDataService) { 
    this.userLang = 1;
    this.daysNumber = [];
    this.calendarMap = {};
    this.numbers = [1,2,3,4,5];
    this.courses = [];
    this.courseDataService.initCourses(this);
    this.getCourses();
  }

  ngOnInit() {
    this.setCalendarDays();
    this.setCalendarHours();
  }

  getCourses() {
    this.courses = this.courseDataService.getCourses();
    this.updateItems();
  }

  updateItems() {
    this.items = [];
    for (let course of this.courses) {
      for (let item of course.getCourseItemIds()) { 

        let newItem = new CalendarItem(
          course.getName(),
          course.getCode(),
          course.getType(),
          course.getSection(),
          item.getStartHour(),
          item.getEndHour(),
          item.getDay(),
          item.getInstructor(),
          item.getLocation()
        );
        
        this.items.push(newItem);
      }
    }
  }

  setCalendarDays(){
    if(this.userLang == 1){ //english lang
      this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
      this.hourName = "Time";
    }else if(this.userLang == 2){ //french lang
      this.days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
      this.hourName = "Heure";
    }

    var currentDate = new Date();
    var dateParts = currentDate.toString().split(' ');
    var date_number = parseInt(dateParts[2]);
    this.month = dateParts[1] + ".";

    for(var i = 0; i < 5; i++){
      this.daysNumber.push(date_number);
      date_number++;
    }
  }

  setCalendarHours(){
    if(this.userLang == 1){ //english lang
      this.hours = ['8:30','10:00','11:30','13:00','14:30','16:00','17:30','19:00','20:30','22:00'];
      //this.hours = ['8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','13:00PM','14:00PM','15:00PM','16:00PM','17:00PM','18:00PM','19:00PM','20:00PM','21:00PM','22:00PM'];
    }else if(this.userLang == 2){ //french lang
      this.hours = ['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00'];
    }
  }

  setTdItems(id, hour){
    var tdItem =  document.getElementById(id).parentElement.parentElement;
    
    if(hour == 'start'){
      tdItem.style.borderBottom = "none";
    }else if(hour == 'end'){
      tdItem.style.borderTop = "none";
    }else if(hour == 'between'){
      tdItem.style.borderBottom = "none";
      tdItem.style.borderTop = "none";
    }
    
    tdItem.style.backgroundColor = "yellow";
  }
}
