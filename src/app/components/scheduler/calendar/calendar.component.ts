import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  days:string[];
  daysNumber:number[];
  month:string;
  hourName:string;
  hours:string[];
  userLang:number;

  constructor() { 
    this.userLang = 1;
    this.daysNumber = [];
  }

  ngOnInit() {
    this.setCalendarDays();
    this.setCalendarHours();
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
      this.hours = ['8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','13:00PM','14:00PM','15:00PM','16:00PM','17:00PM','18:00PM','19:00PM','20:00PM','21:00PM','22:00PM'];
    }else if(this.userLang == 2){ //french lang
      this.hours = ['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00'];
    }
  }
}
