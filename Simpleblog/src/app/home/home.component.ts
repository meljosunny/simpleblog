import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isAuthenticated:any;
  constructor(private route:Router){}  //dependency injection
  ngOnInit()
  {
    if('token' in localStorage)
    {
      this.isAuthenticated=true;
    }
    else
    {
      this.isAuthenticated=false;
    }

  }
view()
{

this.route.navigate(['view'])  // we have to mention the path name of which page that needs to be opned

}
logout(){
 // console.log("before",localStorage.getItem('token'));
  localStorage.clear()
  //console.log("After",localStorage.getItem('token'));
  this.ngOnInit();
}

}
