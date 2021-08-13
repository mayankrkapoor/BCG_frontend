import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../models/policy';

const baseUrl = 'http://localhost:8080/api/policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http : HttpClient) { }


  getAll() : Observable<Policy[]> {
    return this.http.get<Policy[]>(baseUrl);
  }
}
