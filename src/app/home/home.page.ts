import {Component, Renderer2} from '@angular/core';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLoading = false


  paragraph: string = 'Texto sin cambiar'

  constructor(private renderer: Renderer2, private toastController: ToastController) {
    this.renderer.setAttribute(document.body, 'color-theme','dark')
  }

  async onClickAddButton(){
    this.paragraph = 'Texto cambiado'
    this.isLoading = !this.isLoading
    // ion-toast
    const toast = await this.toastController.create({
      message: 'product added',
      duration: 1500,
      position: "bottom"
    })

    await toast.present();
  }

  onToggleClick(event: any){

    if (event.detail.checked){
      this.renderer.setAttribute(document.body, 'color-theme','dark')
    }else{
      this.renderer.removeAttribute(document.body,'color-theme')
    }

    console.log(event )
  }


}
