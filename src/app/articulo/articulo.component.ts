import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Articulo } from '../interfaces/articulo';

@Component({
  selector: 'articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  coleccionDeArticulos: AngularFirestoreCollection<Articulo>;

  articulosObs: Observable<Articulo[]>

  articulos: Articulo[];

  constructor(private afs: AngularFirestore, private router : Router) { }

  ngOnInit() {
    let href = this.router.url;
    href = href.split("?")[1].split("=")[0];

    this.coleccionDeArticulos = this.afs.collection('ARTICULOS',ref => {return ref.where('ID','==',href)});
    this.articulosObs = this.coleccionDeArticulos.valueChanges();
    this.articulosObs.subscribe(function(articulos){
      this.articulos = articulos;
      document.getElementById("articulo").innerHTML = articulos[0].HTML;
    }
    );
  } 

}
