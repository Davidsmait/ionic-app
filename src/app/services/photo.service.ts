import {Injectable} from '@angular/core';
import {Camera, CameraResultType, CameraSource, GalleryPhotos, Photo} from "@capacitor/camera";
import {Directory, Filesystem} from '@capacitor/filesystem';

export interface UserPhoto {
  filepath: string;
  webviewPath: string | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private base64: string = ''

  public photos : UserPhoto[] = [];

  constructor() { }

  public async takeFromGallery(){
    const image: GalleryPhotos = await Camera.pickImages({
      quality: 100,
      limit: 1,
    })

    const fileName = new Date().getTime() + '.jpeg';
    const imageBlob = await fetch(image.photos[0].webPath!)
    const base64Data = await this.convertBlobToBase64(await imageBlob.blob())
    console.log(base64Data)

    return {
      fileName: fileName,
      base64Data: base64Data
    }

  }

  public async addNewToGallery(){
    const capturedPhoto: Photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    })

    const savedImageFile: UserPhoto = await this.savePhoto(capturedPhoto);
    this.photos.unshift(savedImageFile);
  }

  public get64(){
    return this.base64.slice()
  }

  private async savePhoto(photo: Photo): Promise<UserPhoto>{
    const imageBlob: Blob = await this.readAsBlob(photo)
    const base64Data = await this.convertBlobToBase64(imageBlob)
    this.base64 = base64Data
    const fileName = new Date().getTime() + '.jpeg';

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }

  private async readAsBlob(photo: Photo) {
    const response = await fetch(photo.webPath!);
    return await response.blob()
  }

  private async convertBlobToBase64(blob: Blob): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onerror = reject;

      reader.onload = () => {
        resolve(reader.result as string);
      };

    });
  }
}




