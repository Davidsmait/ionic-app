import {Component, OnInit} from '@angular/core';
import {PhotoService} from "../../services/photo.service";
import {BackUrlService} from "../../services/back-url.service";


const IMAGE_DIR = 'stored-images'

interface LocalFile {
  name: string;
  path: string,
  data: string;
}

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  imageUrl: any
  constructor(
    private backUrlService: BackUrlService,
    public photoService: PhotoService) { }

  ngOnInit() {}

  async takePicture(){
    await this.photoService.addNewToGallery()

    // ONLY TEST CODE
    // async function getData(){
    //   try {
    //     const response = await fetch("http://worldtimeapi.org/api/timezone/America/Mexico_City");
    //     const data = await response.json();
    //     console.log(data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    //
    // }
    //
    // await getData()
  }

  onBackUrl(){
    this.backUrlService.backUrl()
  }

}
