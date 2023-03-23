import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/_Model/member';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  //Getting token from local storage for authentication
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     Authentication:
  //       'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
  //   }),
  // };

  baseUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }

  getMember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'user/' + username);
  }
}
