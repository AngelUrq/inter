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
    let url = window.location.href;

    if (url.split('/')[3] == "") {
      let elemento_navbar =  $('.elemento-navbar');

      elemento_navbar.css("color", "white");
      elemento_navbar.mouseover(function () {
        $(this).css("color", "rgb(188, 199, 39)");
      });
      elemento_navbar.mouseout(function () {
        $(this).css("color", "white");
      });

      (function ($) {
        $(document).ready(function () {
          $(window).scroll(function () {
            if ($(this).scrollTop() > $(window).height() - $('.navbar').height()) {     
              $('.navbar').addClass('bg-light');
              
              elemento_navbar.css("color", "rgb(41,47,109)");
              elemento_navbar.mouseout(function () {
                $(this).css("color", "rgb(41,47,109)");
              });

              $('#logo2').attr("style", "display:none");
              $('#logo1').attr("style", "");
            } else {
              $('.navbar').removeClass('bg-light');
              elemento_navbar.css("color", "white");

              elemento_navbar.mouseout(function () {
                $(this).css("color", "white");
              });

              $('#logo2').attr("style", "");
              $('#logo1').attr("style", "display:none");
            }
          });
        });
      }($));


    } else{
      $('.navbar').addClass('bg-light');
      $('#logo2').attr("style", "display:none");
      $('#logo1').attr("style", "");
    }
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    if(!this.navbarOpen){
      $('.navbar').addClass('bg-light');
      $('.elemento-navbar').css("color", "rgb(41,47,109)");
      $('#logo2').attr("style", "display:none");
      $('#logo1').attr("style", "");
    }
  }

}
