import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    document.getElementById("boton").addEventListener('click', this.iniciarSesion);
  }

  iniciarSesion(){
    
  }

}
