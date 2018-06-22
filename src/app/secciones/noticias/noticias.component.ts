import { Component, OnInit } from '@angular/core';
import { FacebookService } from 'ngx-facebook';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  constructor(private fb: FacebookService) {

    console.log('Initializing Facebook');

    fb.init({
      appId: '1927971220769787',
      version: 'v2.9'
    });

  }

  ngOnInit() {
  }

}
