import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Por Á.Z. ISC");
  }

}
