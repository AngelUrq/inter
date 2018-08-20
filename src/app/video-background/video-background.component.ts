import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.scss']
})
export class VideoBackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let video = document.getElementById("mi-video") as HTMLMediaElement;
    video.muted= true;
  }

}
