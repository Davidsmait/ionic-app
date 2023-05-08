import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-log-enter',
  templateUrl: './log-enter.page.html',
  styleUrls: ['./log-enter.page.scss'],
})
export class LogEnterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickArrow(){
    this.router.navigate(['home'])
  }

  onClickEmailArrow(){
    this.router.navigate(['form'])
  }
}
