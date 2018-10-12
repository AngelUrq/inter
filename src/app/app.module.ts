import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { PortadaComponent } from './portada/portada.component';
import { CarruselComponent } from './carrusel/carrusel.component';

import {NgxPageScrollModule} from 'ngx-page-scroll';
import { ContactoComponent } from './contacto/contacto.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ConveniosComponent } from './secciones/convenios/convenios.component';
import { MembresiasComponent } from './secciones/membresias/membresias.component';
import { NoticiasComponent } from './secciones/noticias/noticias.component';
import { ProgramasComponent } from './secciones/programas/programas.component';

import {NgsRevealModule} from 'ng-scrollreveal';

import { FacebookModule } from 'ngx-facebook';
import { YoutubePlayerModule } from 'ngx-youtube-player';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { ActividadesComponent } from './secciones/actividades/actividades.component';
import { ProfesoresComponent } from './secciones/profesores/profesores.component';
import { PanelComponent } from './panel/panel.component';
import { EventosComponent } from './secciones/eventos/eventos.component';
import { VisitasComponent } from './secciones/visitas/visitas.component';
import { ListaComponent } from './secciones/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortadaComponent,
    CarruselComponent,
    ContactoComponent,
    ArticuloComponent,
    ConveniosComponent,
    MembresiasComponent,
    NoticiasComponent,
    ProgramasComponent,
    VideoBackgroundComponent,
    ActividadesComponent,
    ProfesoresComponent,
    PanelComponent,
    EventosComponent,
    VisitasComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgxPageScrollModule,
    FacebookModule.forRoot(),
    YoutubePlayerModule,
    NgsRevealModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
