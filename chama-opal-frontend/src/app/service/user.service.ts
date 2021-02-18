import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/user';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs'

@Injectable()
export class UserService {

  private usersUrl: string;
  private loginUrl: string;
  private registerUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:5000/';
    this.loginUrl = 'http://localhost:5000/login';
    this.registerUrl = 'http://localhost:5000/register';
  }

  public login(user: User) {
    const username = user.username;
    const password = user.password;
    const body = {username, password};
    return this.http.post<any>(this.loginUrl, body);
  }

  public save(user: User) {
    return this.http.post<any>(this.registerUrl, user);
  }

  public goToMainPage() {
     return this.http.get<any>(this.usersUrl);
  }

  public loggedIn() {
    return !!localStorage.getItem('jwt');
  }

  getToken() {
    return localStorage.getItem('jwt');
  }
}
