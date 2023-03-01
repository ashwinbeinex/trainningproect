import { Component } from '@angular/core';
import {CommonapiService} from 'src/app/services/commonapi.service';
import {CommonService} from 'src/app/servicescall/common.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
public searchVal:string='';
public searchCountryVal:string='';
  constructor(public commonapi:CommonapiService, public service: CommonService) {

  }

addData(){
  const user = {
    name:'Test',
    phone:'122344'
  }
  this.service.addData(user);
}


getCountries(){

    this.service.getCountries().subscribe((res:any)=>{
      console.log(res);
    })
}

searchCountry(){
  this.service.searchCountry(this.searchCountryVal).subscribe((res:any)=>{
    console.log(res);
  })
}

  fetchData(){
    this.commonapi.getCountries().subscribe((res:any)=>{
      console.log(res);
    })
  }
  searchData(){
    this.commonapi.getSearchCountries(this.searchVal).subscribe((res:any)=>{
      console.log(res);
      this.commonapi.searchcountries = res;
    })
  }
}
