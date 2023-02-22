import { Component } from '@angular/core';
import { AccountService } from '../_Services/Account/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(private accountService: AccountService) {}
  model: any = {};
  loggedIn: boolean = false;
  login() {
    this.accountService.login(this.model).subscribe((response) => {
      console.log(response),
        (error) => {
          console.log(error);
        };
    });
    this.loggedIn = true;
    console.log(this.loggedIn);
  }
}
