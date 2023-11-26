import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  readonly baseUrl = 'http://localhost:8080/'

  constructor(private http : HttpClient) { }

  getDoctors(): Observable<any>{

    return this.http.get(this.baseUrl + 'doctor-service/api/v1/doctor');
  }

  addDoctor(doctor : any): Observable<any>{
    const httpOptions = {headers : new HttpHeaders({'Content-Type' : 'application/json'})};
    return this.http.post(this.baseUrl + 'doctor-service/api/v1/doctor',doctor,httpOptions);
  }

  updateDoctor(doctor : any): Observable<any>{
    const httpOptions = {headers : new HttpHeaders({'Content-Type' : 'application/json'})};
    return this.http.put(this.baseUrl + 'doctor-service/api/v1/doctor/' + doctor.id,doctor,httpOptions);
  }

  deleteDoctor(doctorId : any): Observable<any>{
    const httpOptions = {headers : new HttpHeaders({'Content-Type' : 'application/json'})};
    return this.http.delete(this.baseUrl + 'doctor-service/api/v1/doctor/' + doctorId);
  }
}
