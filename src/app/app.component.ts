import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideNavbar:boolean;

  constructor(private router:Router){}

  /*ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    console.log(this.router.url);
    if(this.router.url === "login"){
      this.hideNavbar = true;
    }
  }*/
}
