import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';
import { User } from 'src/app/_Model/User';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  baseURL: string = 'https://localhost:7278/api/';
  //buffer of user of size 1
  CurrentUserSource = new ReplaySubject<User>(1);
  //observerable
  CurrentUser$ = this.CurrentUserSource.asObservable();

  login(model: any) {
    return this.http.post(this.baseURL + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.CurrentUserSource.next(user);
        }
      })
    );
  }
  logout() {
    localStorage.removeItem('user');
    this.CurrentUserSource.next(null);
  }

  setCurrentUser(user: User) {
    this.CurrentUserSource.next(user);
  }
}
