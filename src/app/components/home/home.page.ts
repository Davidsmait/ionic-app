import {Component, Renderer2} from '@angular/core';
import {ToastController} from "@ionic/angular";
import {NgForm} from "@angular/forms";

import { CardsDetailsService } from '../../services/cards-details.service'
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  descriptionCard = {
    name: '',
    description: '',
    source: '../../assets/images/bus_talk_joking.jpg'
  }
  isLoading = false

  paragraph: string = 'changed text'

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private toastController: ToastController,
    private cardDetail: CardsDetailsService) {}

  async onClickAddButton(){
    this.paragraph = 'text changed'
    this.isLoading = !this.isLoading
    // ion-toast
    const toast = await this.toastController.create({
      message: 'image added',
      duration: 1500,
      position: "middle",
      buttons: [
        {
          icon: 'eye-outline',
          handler: () => {
            this.router.navigate(['/list-item'], {relativeTo: this.route})
          }
        }
      ]
    })

    await toast.present();
  }

  onToggleClick(event: any){

    if (event.detail.checked){
      this.renderer.setAttribute(document.body, 'color-theme','dark')
    }else{
      this.renderer.removeAttribute(document.body,'color-theme')
    }
  }

  onSubmit(form: NgForm){
    // console.log(form.form.value)
    const descriptionCardForm = form.value

    this.cardDetail.addCard(form.value)

  }

}
