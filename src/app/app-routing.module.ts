import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReserverenComponent } from './reserveren/reserveren.component';
import { ContactComponent } from './contact/contact.component';
import { VeerdienstComponent } from './diensten/veerdienst/veerdienst.component';
import { SafariComponent } from './diensten/safari/safari.component';
import { RondvaartComponent } from './diensten/rondvaart/rondvaart.component';
import { FeestenComponent } from './diensten/feesten/feesten.component';
import { SportvissenComponent } from './diensten/sportvissen/sportvissen.component';
import { OveronsComponent } from './overons/overons.component';
import { LoginComponent } from './login/login.component';
import { CmsComponent } from './cms/cms.component';
import { FetchComponent } from './fetch/fetch.component';
import { TableMatComponent } from './table-mat/table-mat.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'table',
    component: TableMatComponent
  },
  {
    path: 'fetch',
    component: FetchComponent
  },
  {
    path: 'diensten/veerdienst',
    component: VeerdienstComponent
  },
  {
    path: 'overons',
    component: OveronsComponent
  },
  {
    path: 'diensten/sportvissen',
    component: SportvissenComponent
  },
  {
    path: 'diensten/feesten',
    component: FeestenComponent
  },
  {
    path: 'diensten/rondvaart',
    component: RondvaartComponent
  },
  {
    path: 'diensten/safari',
    component: SafariComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'reserveren',
    component: ReserverenComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cms',
    component: CmsComponent
  },
  {
    path: '**',
    component: Error404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
