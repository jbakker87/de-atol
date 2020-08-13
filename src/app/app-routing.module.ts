import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReserverenComponent } from './reserveren/reserveren.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
