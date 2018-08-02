import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

  empezarCarrusel(){
    $("#carouselExampleIndicators").attr("data-interval", "5000");
  }

}