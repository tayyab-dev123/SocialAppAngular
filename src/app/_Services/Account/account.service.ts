import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';
import { User } from 'src/app/_Model/User';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  baseURL: string = environment.apiURL;
  //buffer of user of size 1
  CurrentUserSource = new ReplaySubject<User>(1);
  //observerable
  CurrentUser$ = this.CurrentUserSource.asObservable();

  login(model: any) {
    return this.http.post<User>(this.baseURL + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.CurrentUserSource.next(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseURL + 'account/register', model).pipe(
      map((user: User) => {
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
