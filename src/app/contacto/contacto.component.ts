import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from '../../../node_modules/ng-scrollreveal';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(config: NgsRevealConfig) {
    config.duration = 2000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    config.reset = true;
  }

  ngOnInit() {
  }

}
