import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogEnterPageRoutingModule } from './log-enter-routing.module';

import { LogEnterPage } from './log-enter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogEnterPageRoutingModule
  ],
  declarations: [LogEnterPage]
})
export class LogEnterPageModule {}
