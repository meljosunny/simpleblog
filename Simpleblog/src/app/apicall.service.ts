import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }   //dependency injection

token:any;
 header:any; 

  getblogs()
  {
  this.token=localStorage.getItem('token');   // here we collected the token number from localstorage
  this.header=new HttpHeaders({"Authorization":this.token})  //creates authorization header using token
  
  
     return this.http.get<any>("http://127.0.0.1:8000/blog",{"headers":this.header})  
  }

  postblogs(data:any)
  {
    this.token=localStorage.getItem('token'); 
    this.header=new HttpHeaders({"Authorization":this.token}) 
    return this.http.post<any>("http://127.0.0.1:8000/blog/",data,{"headers":this.header}) 
  }
  
  getblogsbyid(id:any)

  {
     return this.http.get<any>(`http://127.0.0.1:8000/blog/${id}`,{"headers":this.header})
  }
  
  deleteblogsbyid(id:any)
  {
    return this.http.delete<any>(`http://127.0.0.1:8000/blog/${id}`,{"headers":this.header})
  }
  
  editblogsbyid(id:any,data:any)
  {
  
   return this.http.put<any>(`http://127.0.0.1:8000/blog/${id}/`, data,{"headers":this.header})
   
  }
  register(data:any)  
{
  return this.http.post<any>("http://127.0.0.1:8000/user/",data,{"headers":this.header})
}

login(data:any)
{
  return this.http.post<any>('http://127.0.0.1:8000/api-token-auth/',data,{"headers":this.header})
}


}
