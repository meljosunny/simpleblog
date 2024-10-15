import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
data:any;
constructor(private getapi:ApicallService,private route:Router){}  //dependency injection

ngOnInit(){

  this.getapi.getblogs().subscribe((res) =>
  {
    //console.log(res);     //this is to view the data in viewcomponent->inspect->console
    this.data=res;
    //console.log(this.data); //this is to view the data in viewcomponent->inspect->console
  })

}

view(id:any)
{
  //console.log(id);
  this.route.navigate(['detail',id])
}


}
