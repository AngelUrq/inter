import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortadaComponent } from './portada/portada.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProgramasComponent } from './secciones/programas/programas.component';
import { NoticiasComponent } from './secciones/noticias/noticias.component';
import { MembresiasComponent } from './secciones/membresias/membresias.component';
import { ConveniosComponent } from './secciones/convenios/convenios.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2'
import { environment } from '../environments/environment';
import { ArticuloComponent } from './articulo/articulo.component'
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FacebookModule } from 'ngx-facebook';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarruselComponent } from './carrusel/carrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortadaComponent,
    ContactoComponent,
    ProgramasComponent,
    NoticiasComponent,
    MembresiasComponent,
    ConveniosComponent,
    ArticuloComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule,
    AngularFireModule.initializeApp(environment),
    AngularFireDatabaseModule,
    FacebookModule.forRoot(),
    YoutubePlayerModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

