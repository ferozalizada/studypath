import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from '../../services/user-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userAuth: UserAuthenticationService) { }

  ngOnInit() {
  }
  userLogin(e){
    e.preventDefault();
    var userName = e.target.elements[0].value;
    var userPassword = e.target.elements[1].value;
    console.log(userName, userPassword);

    if((userName == 'nick' || 'feroz' || 'eric'  )&&( userPassword == 'admin')){
      this.userAuth.setUserLoginStatus();
      this.router.navigate(['/scheduler']);

    }
    else{
      alert('Wrong Password, Please Retry');
    }

  }
}
