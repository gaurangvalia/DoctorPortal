import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient.model';

@Injectable()
export class PatientService {

  private baseUrl:string = "http://localhost:3000/"
  constructor(
    private http:HttpClient
  ) { }

  // Get the patient detail list
  public getPatientDetails():Observable<Patient[]>{
    debugger
    // let header:HttpHeaders ={
      
    // };
    // header.set('Access-Control-Allow-Origin', '*')
    return this.http.get<Patient[]>(`${this.baseUrl}patient`,)
  }
}
