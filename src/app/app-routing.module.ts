import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./components/form/form.module').then(m => m.FormPageModule)
  },
  {
    path: 'list-item',
    loadChildren: () => import('./components/list-item/list-item.module').then(m => m.ListItemPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./components/camera/camera.module').then(m => m.CameraPageModule)
  },
  {
    path: 'log-enter',
    loadChildren: () => import('./components/log-enter/log-enter.module').then( m => m.LogEnterPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'log-enter'
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
