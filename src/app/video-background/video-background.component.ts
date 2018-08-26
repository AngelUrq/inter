import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.scss']
})
export class VideoBackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let botonSonido = document.getElementById("botonSonido");
    botonSonido.addEventListener('click', this.activarSonido);

    let video = document.getElementById("mi-video") as HTMLMediaElement;
    video.muted = false;
  }

  activarSonido() {
    let video = document.getElementById("mi-video") as HTMLMediaElement;
    video.muted = !video.muted;
  }

}
