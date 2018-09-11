import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let alto = $("#main").css("height");
    $(".nav-side-menu").css("height", alto);
  }

}
