import { Injectable } from '@angular/core';
import {Camera, CameraResultType, CameraSource, Photo} from "@capacitor/camera";
import { Filesystem, Directory } from '@capacitor/filesystem';
import {retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos : UserPhoto[] = [];

  constructor() { }

  public async addNewToGallery(){
    const image: Photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    })

    this.photos.unshift({
      filepath: "soon...",
      webviewPath: image.webPath
    })
    console.log('image : ', image)
    return image;
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath: string | undefined;
}

