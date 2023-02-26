import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_Model/User';
import { AccountService } from '../_Services/Account/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  model: any = {};
  loggedIn: boolean;

  ngOnit() {
    this.accountService.CurrentUser$;
  }
  login() {
    this.accountService.login(this.model).subscribe((response) => {
      this.router.navigateByUrl('/members'),
        (error) => {
          console.log(error);
          this.toastr.error(error.error);
        };
    });
  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
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
