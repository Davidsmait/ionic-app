import { Component, OnInit } from '@angular/core';
import {BackUrlService} from "../services/back-url.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(private backUrlService: BackUrlService) { }

  ngOnInit() {}

  onLogin(){
    console.log('log')
  }

  onBackUrl(){
    this.backUrlService.backUrl()
  }
}
