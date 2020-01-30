
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import{Employee} from './EmployeeData'

@Injectable({
  providedIn: 'root'
})
export class MyServices{
   baseUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private _httpClent:HttpClient){}

  TestService(){
    let _TodayDate=new Date;
    return _TodayDate;
  }

  getJsonData():Observable<Employee>{
    return this._httpClent.get<Employee>(this.baseUrl);
  }
}