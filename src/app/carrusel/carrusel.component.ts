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
    $(window).scroll(function(){
      let wScroll = $(window).scrollTop();
      $('img').css('background-position', 'center ' + (wScroll) + 'px');
    });
  }

  empezarCarrusel(){
    $("#carouselExampleIndicators").attr("data-interval", "5000");
  }

}