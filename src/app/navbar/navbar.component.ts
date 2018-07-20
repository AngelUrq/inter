import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;

  constructor() { }

  ngOnInit() {
    let navbar = document.getElementById("mainNav");
    navbar.classList.remove("bg-light");
    $('p').css("color","white");
    
    $('p').mouseover(function(){
      $(this).css("color","rgb(188, 199, 39)");
    });

    $('p').mouseout(function(){
      $(this).css("color","white");
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
