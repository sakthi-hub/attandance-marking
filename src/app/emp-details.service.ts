import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpDetailsService {

  uri = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }

  addEmp(user_name, email, password, phone_number) {
    const obj = {
      user_name: user_name,
      email: email,
      password: password,
      phone_number: phone_number
    };
    console.log(obj);
    this.http.post(`${this.uri}emp_details_add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getEmp() {
    return this
           .http
           .get(`${this.uri}emp_details_get`);
  }

}
