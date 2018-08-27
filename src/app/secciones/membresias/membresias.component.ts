import { Component, OnInit } from '@angular/core';
import { Membresia } from '../../interfaces/membresia';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'membresias',
  templateUrl: './membresias.component.html',
  styleUrls: ['./membresias.component.scss']
})
export class MembresiasComponent implements OnInit {

  coleccionDeMembresias: AngularFirestoreCollection<Membresia>;

  membresiasObs: Observable<Membresia[]>

  membresias: Membresia[];

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.coleccionDeMembresias = this.afs.collection('MEMBRESIAS',ref => {return ref.orderBy("ORDEN")});
    this.membresiasObs = this.coleccionDeMembresias.valueChanges();
    this.membresiasObs.subscribe(membresias => this.membresias = membresias);
  }

}