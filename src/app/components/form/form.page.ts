import { Component, OnInit } from '@angular/core';
import {BackUrlService} from "../../services/back-url.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(
    private router: Router,
    private backUrlService: BackUrlService
  ) { }

  ngOnInit() {}

  onLogin(){
    console.log('log')
  }

  onBackUrl(){
    this.backUrlService.backUrl()
  }


}
