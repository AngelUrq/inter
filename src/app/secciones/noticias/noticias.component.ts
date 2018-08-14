import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../../../../node_modules/ngx-facebook';

@Component({
  selector: 'noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  player: YT.Player;
  id: string = 'Sp9SeV_abnA';

  constructor(private fb: FacebookService) {
    fb.init({
      appId: '1927971220769787',
      version: 'v2.9'
    });
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

  ngOnInit() {
  }

}
