import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../models/policy';

const baseUrl = 'http://localhost:9000/api/policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http : HttpClient) { }

  policy:any;
  id:any;
  customerId:any;

  getter() {
    return this.policy;
  }

  setter(policy:Policy){
    this.policy = policy;
  }

  getId() {
    return this.id;
  }

  setId(id:any){
    this.id = id;
  }

  getCustomerId(){
    return this.customerId;
  }

  setCustomerId(id:any){
    this.customerId = id;
  }


  // retrieve all policies
  getAll() : Observable<Policy[]> {
    return this.http.get<Policy[]>(baseUrl);
  }

  // retrieve policy by id
  getById(id: any) : Observable<Policy> {
    return this.http.get<Policy>(`${baseUrl}/${id}`);
  }

  //create new policy
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  //update policy
  update(id :any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  //get policy by fuel type
  getByFuelType(fuel:any) : Observable<any>{
    return this.http.get(`${baseUrl}/fuel/${fuel}`);
  }
}
