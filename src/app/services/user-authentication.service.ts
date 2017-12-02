import { Injectable } from '@angular/core';

@Injectable()
export class UserAuthenticationService {
  private userLoginStatus;
  private userName;

  constructor() { 
    this.userLoginStatus = false;
  }
  setUserLoginStatus(){
    this.userLoginStatus = true;
  }
  getUserLoginStatus(){
    return this.userLoginStatus;
  }
}