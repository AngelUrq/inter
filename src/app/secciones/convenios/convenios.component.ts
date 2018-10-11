import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '../../../../node_modules/angularfire2/firestore';
import { Convenio } from '../../interfaces/convenio';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss']
})
export class ConveniosComponent implements OnInit {

  coleccionDeConvenios: AngularFirestoreCollection<Convenio>;

  conveniosObs: Observable<Convenio[]>

  convenios: Convenio[];

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.coleccionDeConvenios = this.afs.collection('CONVENIOS',ref => {return ref.orderBy("ORDEN")});
    this.conveniosObs = this.coleccionDeConvenios.valueChanges();
    this.conveniosObs.subscribe(convenios => this.convenios = convenios);
  }

  subtitular(i){
    switch(i){
      case 1:
        return "Convenios de doble titulación";
      case 3:
        return "Convenios de titulación opcional";
      case 4:
        return "Convenios de desarrollo empresarial";
      case 6:
        return "Convenios de intercambio docente-alumno";
    }

    return "";
  }

}
