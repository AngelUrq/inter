import { Component } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '../../node_modules/angularfire2/firestore';
import { Observable } from '../../node_modules/rxjs';
import * as $ from 'jquery';

interface Configuracion{
  ENCENDIDO: boolean;
  MENSAJE: string;
  IMAGEN: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  coleccion_configuracion: AngularFirestoreCollection<Configuracion>;

  configuracionObs: Observable<Configuracion[]>;

  configuracion: Configuracion[];

  constructor(private afs: AngularFirestore){
  }

  ngOnInit(){
    this.coleccion_configuracion = this.afs.collection('CONFIGURACION');

    this.configuracionObs = this.coleccion_configuracion.valueChanges();

    this.configuracionObs.subscribe(configuracion => {
      if(!configuracion[0].ENCENDIDO){
        /*$("#pagina").remove();
        $("body").append(configuracion[0].MENSAJE);
        let imagen = document.createElement("img");
        imagen.src = configuracion[0].IMAGEN;
        $("body").append(imagen);*/
      }
    });
  }

}
