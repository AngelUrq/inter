import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  player: YT.Player;
  private id: string = '7EVzGcyz34U';

  constructor() { }

  ngOnInit() {
  }

  savePlayer(player) {
    this.player = player;
  }
  onStateChange(event) {
  }

}
