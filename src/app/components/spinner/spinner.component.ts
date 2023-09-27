import { Component, OnInit } from '@angular/core';
import {SpinnerService} from "./spinner.service";

@Component({
  selector: 'app-spinner',
  template: `
    <div class="overlay" *ngIf="isLoading$ | async">
      <div class="spinner"></div>
    </div>
  `,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent  implements OnInit {
  isLoading$ = this.spinnerService.isLoading$

  constructor(private readonly spinnerService:SpinnerService) { }

  ngOnInit() {

  }

}
