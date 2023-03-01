import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonapiService {

  public searchcountries:any;
  constructor(private http:HttpClient) { }

  getCountries(){
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getSearchCountries(country:string){
    return this.http.get('https://restcountries.com/v3.1/name/'+country);
  }

  getCountriesVariable(){
    return this.searchcountries;
  }
}
