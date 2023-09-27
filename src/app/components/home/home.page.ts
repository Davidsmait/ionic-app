import {Component, OnInit, Renderer2} from '@angular/core';
import {ToastController} from "@ionic/angular";
import {NgForm} from "@angular/forms";

import { CardsDetailsService } from '../../services/cards-details.service'
import {ActivatedRoute, Router} from "@angular/router";
import {PhotoService} from "../../services/photo.service";
import {AkkaApiService} from "../../services/akka-api.service";
import {log} from "util";
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  descriptionCard = {
    name: '',
    description: '',
    source: '../../assets/images/bus_talk_joking.jpg'
  }
  isLoading = false


  constructor(
    private http: HttpClient,
    private akkaApiService: AkkaApiService,
    private cardsDetailsService : CardsDetailsService,
    private photoService: PhotoService,
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private toastController: ToastController,
    private cardDetail: CardsDetailsService) {

  }

  ngOnInit() {


    // this.akkaApiService.getHello()

    // this.akkaApiService.postHello()
  }

  async onClickAddButton(){
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
    this.akkaApiService.postCardImage(form.form.value)
    this.cardDetail.addCard(form.value)

  }

  async onSelectFromDevice(){
    await this.photoService.takeFromGallery().then((data) => {
      this.descriptionCard.source = data.base64Data
    })
  }


  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    // console.log(event.target.files[0])
    console.log(event)
  }

  upload() {
    if (this.selectedFile) {
      // Aquí puedes realizar alguna acción con el archivo seleccionado, como enviarlo a un servidor o procesarlo localmente
      console.log(this.selectedFile);
    } else {
      console.log('No se ha seleccionado ningún archivo.');
    }
  }
}
