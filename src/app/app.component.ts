import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './_Model/User';
import { AccountService } from './_Services/Account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SocialAppAngular';
  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {}
  users: any;
  ngOnInit() {
    this.getUser();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
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
