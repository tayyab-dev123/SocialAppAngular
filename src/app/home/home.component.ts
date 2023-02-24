import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private http: HttpClient) {}
  registerMode = false;
  users: any;

  ngOnInit() {
    this.getUser();
  }
  getUser() {
  this.http.get('https://localhost:7278/api/Users').subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.log(error);
      }
    );
  }

changeRegisterMode(event: boolean){
this.registerMode = event
}

  registerToggle() {
    this.registerMode = !this.registerMode;
  }
}
