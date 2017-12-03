import { Injectable } from '@angular/core';

@Injectable()
export class UserAuthenticationService {
  private userLoginStatus:boolean;
  private userID:number;
  private name:string;

  constructor() { 
    this.userLoginStatus = false;
  }
  
  setUserLoginStatus(){
    this.userLoginStatus = true;
  }
  
  getUserLoginStatus(){
    return this.userLoginStatus;
  }

  setUserID(userID:number){
    this.userID = userID;
  }

  getUserID(){
    return this.userID;
  }

  setName(name:string){
    this.name = name;
  }

  getName(){
    return this.name;
  }
}