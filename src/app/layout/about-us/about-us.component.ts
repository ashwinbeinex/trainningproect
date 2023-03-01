import { Component, OnInit } from '@angular/core';
import {CommonapiService} from 'src/app/services/commonapi.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{

  constructor(public commonapi:CommonapiService){

  }
  ngOnInit(){
    console.log(this.commonapi.getCountriesVariable())
  }
}
