import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  @ViewChild('carousel') carousel: NgbCarousel;

  constructor(config: NgbCarouselConfig) {
    config.interval = -1;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
  }
  
  ngOnInit() {
  }

  empezarCarrusel(){
    this.carousel.interval = 5000;
    this.carousel.cycle();
  }

}