import { BrowserModule, Title } from '@angular/platform-browser';
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
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { HeaderComponent } from './header/header.component';
import { SportvissenTariefComponent } from './tarieven/sportvissen-tarief/sportvissen-tarief.component';
import { VeerdienstPerkpolderComponent } from './vaardagen/veerdienst-perkpolder/veerdienst-perkpolder.component';
import { VeerdienstHansweertComponent } from './vaardagen/veerdienst-hansweert/veerdienst-hansweert.component';
import { ReserveringenlijstComponent } from './reserveringen/reserveringenlijst/reserveringenlijst.component';
import { ReserveringenDetailsComponent } from './reserveringen/reserveringen-details/reserveringen-details.component';
import { SafariNadropdownComponent } from './diensten/safari/safari-nadropdown/safari-nadropdown.component';
import { SafariScheduleComponent } from './diensten/safari/safari-schedule/safari-schedule.component';
import { SafariTariefComponent } from './tarieven/safari-tarief/safari-tarief.component';
import { VeerdienstNadropdownComponent } from './diensten/veerdienst/veerdienst-nadropdown/veerdienst-nadropdown.component';
import { MapComponent } from './components/titles/map/map.component';
import { GpsHansweertComponent } from './components/titles/gps/gps-hansweert/gps-hansweert.component';
import { GpsPerkpolderComponent } from './components/titles/gps/gps-perkpolder/gps-perkpolder.component';
import { OpstapHansweertComponent } from './components/titles/opstaplocatie/opstap-hansweert/opstap-hansweert.component';
import { OpstapPerkpolderComponent } from './components/titles/opstaplocatie/opstap-perkpolder/opstap-perkpolder.component';
import { AvailableSafariComponent } from './components/titles/available/available-safari/available-safari.component';
import { AvailableVeerdienstComponent } from './components/titles/available/available-veerdienst/available-veerdienst.component';
import { PracticalInformationComponent } from './components/titles/information/practical-information/practical-information.component';
import { ExpectationsComponent } from './components/titles/expectations/expectations.component';
import { SimpleInformationComponent } from './components/titles/information/simple-information/simple-information.component';

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
    Error404Component,
    Error500Component,
    HeaderComponent,
    SportvissenTariefComponent,
    VeerdienstPerkpolderComponent,
    VeerdienstHansweertComponent,
    ReserveringenlijstComponent,
    ReserveringenDetailsComponent,
    SafariNadropdownComponent,
    SafariScheduleComponent,
    SafariTariefComponent,
    VeerdienstNadropdownComponent,
    MapComponent,
    GpsHansweertComponent,
    GpsPerkpolderComponent,
    OpstapHansweertComponent,
    OpstapPerkpolderComponent,
    AvailableSafariComponent,
    AvailableVeerdienstComponent,
    PracticalInformationComponent,
    ExpectationsComponent,
    SimpleInformationComponent
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
    MatSortModule,
    MatMenuModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
