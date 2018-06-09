import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortadaComponent } from './portada/portada.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { ContactoComponent } from './contacto/contacto.component';
import { ProgramasComponent } from './secciones/programas/programas.component';
import { NoticiasComponent } from './secciones/noticias/noticias.component';
import { MembresiasComponent } from './secciones/membresias/membresias.component';
import { ConveniosComponent } from './secciones/convenios/convenios.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortadaComponent,
    ContactoComponent,
    ProgramasComponent,
    NoticiasComponent,
    MembresiasComponent,
    ConveniosComponent
  ],
  imports: [
    BrowserModule,
    Ng2PageScrollModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

