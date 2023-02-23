import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_Model/User';
import { AccountService } from '../_Services/Account/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(public accountService: AccountService) {}
  model: any = {};
  loggedIn:boolean;

  ngOnit() {
   this.accountService.CurrentUser$
  }
  login() {
    this.accountService.login(this.model).subscribe((response) => {
      console.log(response),
        (error) => {
          console.log(error);
        };
    });
  }
  logout() {
    this.accountService.logout();
  }

  // getCurrentUser() {
  //   this.accountService.CurrentUser$.subscribe((user) => {
  //     this.loggedIn = !!user;
  //   }),
  //     (error) => {
  //       console.log(error);
  //     };
  // }
}
