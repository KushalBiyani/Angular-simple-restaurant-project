import { Injectable } from '@angular/core';
import { Leader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import {delay , map} from 'rxjs/operators';
import {Dish} from '../shared/dish';
import {baseURL} from '../shared/baseurl';
import {HttpClient} from '@angular/common/http';

import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient) { }
  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership');
  }
  getLeader(id: number): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership/' + id);
  }
  getFeaturedleader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leadership?featured=true').pipe(map(leaders => leaders[0]));
  }

  getleaderIds(): Observable<number[] | any> {
    return this.getLeaders().pipe(map(leaders => leaders.map(leader => leader.id)));
  }
}
