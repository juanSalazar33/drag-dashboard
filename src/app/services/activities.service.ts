import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private URL = 'http://localhost:7000'
  constructor(private http: HttpClient) { }
  
  getActivities(): Observable<any>{
    return this.http.get(`${this.URL}/tasks`)
  }

}
