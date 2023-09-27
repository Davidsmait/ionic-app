import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {SpinnerService} from "../components/spinner/spinner.service";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private readonly spinnerService:SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("soy el interceptor :D")
    this.spinnerService.show()
    return next.handle(request).pipe(
      finalize(() => {
        console.log("XD")
        this.spinnerService.hide()
      })
    )
  }
}
