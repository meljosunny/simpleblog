import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private postapi:ApicallService,private route:Router,private router:ActivatedRoute){}
  data={
    'title':'',
    'content':'',
    'tags':''
  }
  id:any;
  ngOnInit()
  {
    this.id=this.router.snapshot.paramMap.get('id') // here we captured the id shown in the url.now we have to take the data in this particular id from backend
    if(this.id){
    this.postapi.getblogsbyid(this.id).subscribe((res)=>
    {
      //console.log(res);
      this.data=res;
    })}
      
  }
  onsubmit()
  {
    if(this.id){
      this.postapi.editblogsbyid(this.id,this.data).subscribe((res)=>
      {
        console.log(res);
        this.route.navigate(['view'])
      })
    }
    else{

      //console.log(this.data);
      this.postapi.postblogs(this.data).subscribe((res)=>
      {
        console.log(res);
        this.route.navigate(['view'])
      })
    
    }
  }


}
