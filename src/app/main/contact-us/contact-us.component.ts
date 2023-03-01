import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonapiService } from 'src/app/services/commonapi.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  public searchVal:string='';
  constructor(public router:Router,public activateRouter:ActivatedRoute,public commonapi:CommonapiService){
    activateRouter.paramMap.subscribe((params:any)=>{
      console.log(params.params.id);
      
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
