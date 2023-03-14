import {Component, OnInit} from '@angular/core';
import {Camera, CameraResultType, CameraSource, Photo} from "@capacitor/camera";
import {PhotoService} from "../services/photo.service";
import {log} from "@capacitor/assets/dist/util/log";


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
  constructor(public photoService: PhotoService) { }

  ngOnInit() {}

  async takePicture(){
    await this.photoService.addNewToGallery()
      .then(image => this.imageUrl = image.webPath)
  }

}
