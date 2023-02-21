import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SocialAppAngular';
  constructor(private http: HttpClient) {}
  users: any;
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.http.get('https://localhost:7278/api/Users').subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
