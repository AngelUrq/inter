import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/interfaces/articulo';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Seccion } from 'src/app/interfaces/seccion';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  coleccionDeArticulos: AngularFirestoreCollection<Articulo>;
  coleccionDeSecciones: AngularFirestoreCollection<Seccion>;

  articulosObs: Observable<Articulo[]>
  seccionesObs: Observable<Seccion[]>

  listaArticulos: Articulo[];
  listaSecciones: Seccion[];

  constructor(private afs: AngularFirestore, private router : Router) {
    
  }

  ngOnInit() {
    let href = this.router.url;
    href = href.split("?")[1].split("=")[0];

    this.coleccionDeSecciones = this.afs.collection('SECCIONES', ref => {return ref.where('ID','==',href)});
    this.seccionesObs = this.coleccionDeSecciones.valueChanges();
    this.seccionesObs.subscribe(secciones => this.listaSecciones = secciones);
  
    this.coleccionDeArticulos = this.afs.collection('ARTICULOS',ref => {return ref.where('SECCION','==',href)});
    this.articulosObs = this.coleccionDeArticulos.valueChanges();
    this.articulosObs.subscribe(articulos => this.listaArticulos = articulos);
  } 

}
