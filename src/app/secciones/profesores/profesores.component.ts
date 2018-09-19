import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let imagen = $("#imagenCM");
    let texto = $("#texto");

    imagen.css("height", texto.css("height"));
  }

}
