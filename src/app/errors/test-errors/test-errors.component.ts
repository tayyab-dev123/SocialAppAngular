import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent {
//Errors on clintside
//1) first set base URL
//2) set HTTP service in ctor
//3) add errors methods i.e get404Error() which u want to display and then subscribe the
// responce and log it along with error 
 /**
  *
  */
 baseURL: string = 'https://localhost:7278/api/';
 constructor(private http: HttpClient) {}

 get404Error(){
    this.http.get(this.baseURL+"Buggy/not-found").subscribe((response=>{
      console.log(response)
    }), error=>{
      console.log(error)
    })
 }
 get500Error(){
    this.http.get(this.baseURL+"Buggy/server-error").subscribe((response=>{
      console.log(response)
    }), error=>{
      console.log(error)
    })
 }
 get401Error(){
    this.http.get(this.baseURL+"Buggy/auth").subscribe((response=>{
      console.log(response)
    }), error=>{
      console.log(error)
    })
 }
 get400Error(){
    this.http.get(this.baseURL+"Buggy/bad-request").subscribe((response=>{
      console.log(response)
    }), error=>{
      console.log(error)
    })
 }
 get400ValidationError(){
    this.http.post(this.baseURL+"account/register", {}).subscribe((response=>{
      console.log(response)
    }), error=>{
      console.log(error)
    })
 }

}
