import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.scss']
})
export class VisitasComponent implements OnInit {

  player: YT.Player;
  id: string = '7EVzGcyz34U';

  constructor() { }

  ngOnInit() {
  }

  savePlayer(player) {
    this.player = player;
  }
  onStateChange(event) {
  }

}
