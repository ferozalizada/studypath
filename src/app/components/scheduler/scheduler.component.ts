import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../../services/user-authentication.service';
import { LoginComponent } from '../login/login.component';
import { User } from '../../classes/user';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  constructor(private userAuth: UserAuthenticationService) { }

  ngOnInit() {
    setTimeout(function(){alert("Welcome " + User.userConnected.firstName + "!")},500);
  }

}
