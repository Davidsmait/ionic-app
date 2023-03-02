import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLoading = false


  paragraph: string = 'Texto sin cambiar'

  constructor(private renderer: Renderer2) {}

  onClickButton(){
    this.paragraph = 'Texto cambiado'
    this.isLoading = !this.isLoading
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
