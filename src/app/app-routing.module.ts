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
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { ReserveringenlijstComponent } from './reserveringen/reserveringenlijst/reserveringenlijst.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'reserveringen',
  //   component: ReserveringenlijstComponent,
  //   data : {
  //     title: 'Lopende reserveringen.'
  //   }
  // },
  // {
  //   path: 'fetch',
  //   component: FetchComponent
  // },
  {
    path: 'diensten/veerdienst',
    component: VeerdienstComponent,
    data : {
      title: 'Veerdienst'
    }
  },
  {
    path: 'overons',
    component: OveronsComponent,
    data : {
      title: 'Over ons'
    }
  },
  {
    path: 'diensten/sportvissen',
    component: SportvissenComponent,
    data : {
      title: 'Sportvissen'
    }
  },
  {
    path: 'diensten/feesten',
    component: FeestenComponent,
    data : {
      title: 'Feesten en partijen'
    }
  },
  {
    path: 'diensten/rondvaart',
    component: RondvaartComponent,
    data : {
      title: 'Rondvaart'
    }
  },
  {
    path: 'diensten/safari',
    component: SafariComponent,
    data : {
      title: 'Zeehondensafari'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data : {
      title: 'Rondvaartbedrijf en veerdienst De-Atol. Voor sportvissen, veerdienst, feesten en partijen.'
    }
  },
  {
    path: 'reserveren',
    component: ReserverenComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
    data : {
      title: 'Contact'
    }
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'cms',
  //   component: CmsComponent
  // },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '500',
    component: Error500Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
