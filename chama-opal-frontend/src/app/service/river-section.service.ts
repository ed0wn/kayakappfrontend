import { Injectable } from '@angular/core';
import {RiverSection} from '../model/river-section';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RiverSectionService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:5000/';
   }

  public findSectionsByRiver(riverName: string): Observable<RiverSection[]> {
    return this.http.get<RiverSection[]>(this.url + 'api/riversections/' + riverName);
  }

  public build() {
    return this.http.post(this.url + 'riversections/build', null);
  }

  public update() {
    return this.http.put(this.url + 'riversections/update', null);
  }
}
