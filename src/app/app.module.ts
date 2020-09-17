import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ReserverenComponent } from './reserveren/reserveren.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ReserverenZeehondComponent } from './reserveren-zeehond/reserveren-zeehond.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ContactComponent } from './contact/contact.component';
import { VeerdienstComponent } from './diensten/veerdienst/veerdienst.component';
import { SafariComponent } from './diensten/safari/safari.component';
import { RondvaartComponent } from './diensten/rondvaart/rondvaart.component';
import { FeestenComponent } from './diensten/feesten/feesten.component';
import { SportvissenComponent } from './diensten/sportvissen/sportvissen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OveronsComponent } from './overons/overons.component';
import { ContactConfirmComponent } from './modals/contact-confirm/contact-confirm.component';
import { LoginComponent } from './login/login.component';
import { CmsComponent } from './cms/cms.component';
import { ImageModalComponent } from './modals/image-modal/image-modal.component';
import { StandaardTariefComponent } from './tarieven/standaard-tarief/standaard-tarief.component';
import { VeerdienstTariefComponent } from './tarieven/veerdienst-tarief/veerdienst-tarief.component';
import { FetchComponent } from './fetch/fetch.component';
import { TableMatComponent } from './table-mat/table-mat.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ReserverenComponent,
    ContactComponent,
    VeerdienstComponent,
    SafariComponent,
    RondvaartComponent,
    FeestenComponent,
    SportvissenComponent,
    NavbarComponent,
    OveronsComponent,
    ReserverenZeehondComponent,
    ContactConfirmComponent,
    LoginComponent,
    CmsComponent,
    ImageModalComponent,
    StandaardTariefComponent,
    VeerdienstTariefComponent,
    FetchComponent,
    TableMatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
