import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    console.log("Por Á.Z. ISC");
  }

}