import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { ProgramasComponent } from './secciones/programas/programas.component';
import { MembresiasComponent } from './secciones/membresias/membresias.component';
import { ConveniosComponent } from './secciones/convenios/convenios.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { EventosComponent } from './secciones/eventos/eventos.component';

const routes: Routes = [
  {path: '', component: PortadaComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'programas', component: ProgramasComponent},
  {path: 'membresias', component: MembresiasComponent},
  {path: 'convenios', component: ConveniosComponent},
  {path: 'articulo', component: ArticuloComponent},
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
