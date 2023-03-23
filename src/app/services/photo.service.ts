import {Injectable} from '@angular/core';
import {Camera, CameraResultType, CameraSource, Photo} from "@capacitor/camera";
import {Directory, Filesystem} from '@capacitor/filesystem';
import {CardsDetailsService} from "./cards-details.service";
import {DescriptionCardModel} from "../interfaces/description-card.model";

export interface UserPhoto {
  filepath: string;
  webviewPath: string | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  cardItem : DescriptionCardModel = {
    name: 'Test Name',
    description: 'Test description',
    source: ''
  }

  public photos : UserPhoto[] = [];

  constructor(private cardsDetails: CardsDetailsService) { }

  public async addNewToGallery(){
    const capturedPhoto: Photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    })


    const savedImageFile: UserPhoto = await this.savePhoto(capturedPhoto);

    this.photos.unshift(savedImageFile);
    for (const photo of this.photos) {
      this.cardItem.description = new Date().getTime() + '.jpeg'
      this.cardItem.source = photo.webviewPath ?? ''
      this.cardsDetails.addCard(this.cardItem)

    }
    console.log('capturedPhoto:  ',capturedPhoto)

  }

  private async savePhoto(photo: Photo): Promise<UserPhoto>{
    const imageBlob: Blob = await this.readAsBlob(photo)
    const base64Data = await this.convertBlobToBase64(imageBlob)
    // console.log('photo: ',photo)
    // console.log('imageBlob: ',imageBlob)
    // console.log('base64Data: ', base64Data)
    const fileName = new Date().getTime() + '.jpeg';

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });
    // console.log('savedFile: ',savedFile)


    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }

  private async readAsBlob(photo: Photo) {
    // console.log('webPath: ',photo.webPath)
    const response = await fetch(photo.webPath!);
    return await response.blob()

  }

  private async convertBlobToBase64(blob: Blob): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader: FileReader = new FileReader();
      // console.log('blob for convertBlobToBase64', blob)

      reader.readAsDataURL(blob);
      reader.onerror = reject;

      reader.onload = () => {
        resolve(reader.result as string);
      };


    });
  }
}




