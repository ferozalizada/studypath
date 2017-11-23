import { Injectable } from '@angular/core';
import { Semester } from '../classes/semester';

@Injectable()
export class SemesterListService {
  private season:string[];
  private semesterList:Semester[];

  constructor() { 
    //...
  }

  initSemesterListService(userLang:number){
    if(userLang == 1){ //english lang
      this.season = ['Summer','Fall','Winter','Spring'];
    }else if(userLang == 2){ //french lang
      this.season = ['Été','Automne','Hiver','Printemps']
    }

    this.semesterList = [];
    this.createSemesterList();
  }

  createSemesterList(){
    var d = new Date();
    var year = d.getFullYear();
    year -= 2;

    for(var i = 0; i < 4; i++){ //a degree has 4 years or more?
      var s1 = new Semester();
      var s2 = new Semester();

      if(year % 2 != 0){ //year is odd not even
        s1.setSeason(this.season[0]); //Summer
        s1.setYear(year);

        s2.setSeason(this.season[1]); //Fall
        s2.setYear(year);
      }else{
        s1.setSeason(this.season[2]); //Winter
        s1.setYear(year);

        s2.setSeason(this.season[3]); //Spring
        s2.setYear(year);
      }

      this.semesterList.push(s1);
      this.semesterList.push(s2);

      year++;
    }
  }

  getSemesterList(){
    return this.semesterList;
  }

}
