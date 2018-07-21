import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgsRevealConfig } from '../../../node_modules/ng-scrollreveal';

@Component({
  selector: 'portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {

  constructor(config: NgsRevealConfig) { 
    config.duration = 2000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
  }

  ngOnInit() {
    console.log("Por Á.Z. ISC");
  }

}
