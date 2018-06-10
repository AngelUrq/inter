import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from '../portada/portada.component';
import { NoticiasComponent } from '../secciones/noticias/noticias.component';
import { ProgramasComponent } from '../secciones/programas/programas.component';
import { MembresiasComponent } from '../secciones/membresias/membresias.component';
import { ConveniosComponent } from '../secciones/convenios/convenios.component';
import { ArticuloComponent } from '../articulo/articulo.component';

    const routes: Routes = [
      {path: '', component: PortadaComponent},
      {path: 'noticias', component: NoticiasComponent},
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
