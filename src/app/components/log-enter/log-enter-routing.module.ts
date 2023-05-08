import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogEnterPage } from './log-enter.page';

const routes: Routes = [
  {
    path: '',
    component: LogEnterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogEnterPageRoutingModule {}
