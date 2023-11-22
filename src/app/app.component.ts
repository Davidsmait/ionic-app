import {Component, Renderer2} from '@angular/core';
import {FcmService} from "./services/fcm.service";
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private fcm: FcmService,
    private renderer: Renderer2
  ) {
    this.platform.ready().then(() => {
      this.fcm.initPush()
    }).catch(e => {
      console.log("error init push: ", e)
    })

    this.renderer.setAttribute(document.body, 'color-theme','dark');
  }
}
