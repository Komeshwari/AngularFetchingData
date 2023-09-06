import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  private apiUrl = 'https://www.w3schools.com/angular/customers.php';
  

  constructor(private http: HttpClient) { }

  getCustomerData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
