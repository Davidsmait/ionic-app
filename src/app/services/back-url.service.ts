import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BackUrlService {

  constructor(private router: Router, private route: ActivatedRoute) { }

  backUrl(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}
