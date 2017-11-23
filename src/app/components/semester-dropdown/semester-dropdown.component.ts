import { Component, OnInit } from '@angular/core';
import { SemesterListService } from '../../services/semester-list.service';
import { Semester } from '../../classes/semester';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-semester-dropdown',
  templateUrl: './semester-dropdown.component.html',
  styleUrls: ['./semester-dropdown.component.css']
})
export class SemesterDropdownComponent implements OnInit {
  semesterList:Semester[];

  constructor(private semesterListService: SemesterListService) {
    semesterListService.initSemesterListService(1); //english lang as param
    this.semesterList = semesterListService.getSemesterList();
  }

  ngOnInit() {
  }

}
