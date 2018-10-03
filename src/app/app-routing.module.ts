import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { ProgramasComponent } from './secciones/programas/programas.component';
import { MembresiasComponent } from './secciones/membresias/membresias.component';
import { ConveniosComponent } from './secciones/convenios/convenios.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ActividadesComponent } from './secciones/actividades/actividades.component';
import { PanelComponent } from './panel/panel.component';
import { ProfesoresComponent } from './secciones/profesores/profesores.component';
import { NoticiasComponent } from './secciones/noticias/noticias.component';
import { EventosComponent } from './secciones/eventos/eventos.component';

const routes: Routes = [
  {path: '', component: PortadaComponent},
  {path: 'actividades', component: ActividadesComponent},
  {path: 'programas', component: ProgramasComponent},
  {path: 'membresias', component: MembresiasComponent},
  {path: 'convenios', component: ConveniosComponent},
  {path: 'articulo', component: ArticuloComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'profesores', component: ProfesoresComponent},
  {path: 'conferencias', component: PanelComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'noticias', component: NoticiasComponent},
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
