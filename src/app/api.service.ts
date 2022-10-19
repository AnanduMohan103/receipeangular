import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewReceipe=()=>{
    return this.http.get("http://localhost:8080/viewReceipe")
  }
  addReceipe=(data:any)=>{
    return this.http.post("http://localhost:8080/addReceipe",data)
  }
}

