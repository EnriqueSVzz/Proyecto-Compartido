import { Platillo } from './../platillo.module';
import { Component, OnInit } from '@angular/core';
import { PlatilloServie } from '../platillo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stars: string = "";

  constructor(private platilloServicio : PlatilloServie) { }

  ngOnInit(): void {
    //inicializamos nuestro arreglo
    this.platillos = this.platilloServicio.platillosArray;
  }

  platillos : Platillo[] = [];
  currentRate = 0;

}
