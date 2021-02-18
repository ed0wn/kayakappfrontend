import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { River } from '../model/river';
import { Observable } from 'rxjs';

@Injectable()
export class RiverService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:5000/api/';
  }

  public findAll(): Observable<River[]> {
    return this.http.get<River[]>(this.url + 'rivers');
  }

  public save() {
    return this.http.post(this.url + 'rivers/save', null);
  }
}
