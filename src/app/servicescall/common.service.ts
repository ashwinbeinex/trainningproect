import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public dataShare:any=[];

  constructor(public http:HttpClient) { }

  getData(){
    return this.dataShare;
  }

  addData(data:any){
    this.dataShare.push(data);
  }

  getCountries(){
    return this.http.get('https://restcountries.com/v3.1/all')
  }

  searchCountry(search:string){
    return this.http.get('https://restcountries.com/v3.1/name/'+search);
  }
}
