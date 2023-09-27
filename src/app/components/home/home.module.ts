import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {SpinnerComponent} from "../spinner/spinner.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  exports: [
    SpinnerComponent
  ],
  declarations: [HomePage, SpinnerComponent]
})
export class HomePageModule {}
