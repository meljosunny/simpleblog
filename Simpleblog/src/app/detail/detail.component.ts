import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(private route:ActivatedRoute,private detailapi:ApicallService,private router: Router){}  //dependency injection
  id:any;
  data:any;
  ngOnInit(){
 // for retrieving id value from path connecting detail component here we are using Module AcivatedRoute
 this.id=this.route.snapshot.paramMap.get('id')
 //console.log("in detail ts file");
 //console.log(this.id);

 this.detailapi.getblogsbyid(this.id).subscribe((res) =>
 {
   console.log(res);
   this.data=res;
   
 })
  }

  edit(id:any)
  {
    this.router.navigate(['edit',id])
  }
  

  delete(id:any){
    console.log(id);
    if(confirm("Are you Sure you want to delete " + this.data.title + "?")) //confirm is a function in javascript  as same as alert function but here it gives question and we have to answer it.And when we gives ok then only it will enter into the if condition.
     {
       this.detailapi.deleteblogsbyid(id).subscribe((res) => 
       {
         //console.log(res);
         this.router.navigate(['view'])
       })
    }
  }

}
