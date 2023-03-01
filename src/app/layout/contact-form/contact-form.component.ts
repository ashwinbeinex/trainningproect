import { Component } from '@angular/core';
import {CommonService} from 'src/app/servicescall/common.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  constructor(public service:CommonService){
    this.fetchData();
  }

  fetchData(){
    console.log(this.service.getData());
  }
}
