import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AkkaApiService {
  private apiUrlGet = 'http://localhost:8080/'
  private apiUrlPost = 'http://localhost:9000/'

  private dataPost = {
    mensaje: 'Hola desde Angular'
  }

  constructor(private http: HttpClient) { }

  public getHello(): any {
    return this.http.get(this.apiUrlGet + 'hello',{responseType: 'json'})
      .subscribe({
        next: (value: any) => console.log(value),
        error: (err: any) => console.log(err),
        complete: () => console.log('GET completed')
      }
    )
  }

  public postHello(): any {
    return this.http.post(
      this.apiUrlPost+ 'endpoint',
      this.dataPost.mensaje,
      {responseType: "text"})
      .subscribe({
        next: (value: any) => console.log(value),
        error: (err: any) => console.log(err),
        complete: () => console.log('POST completed')
      }
    )
  }
}
