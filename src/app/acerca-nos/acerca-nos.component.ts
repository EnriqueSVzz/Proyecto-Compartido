import { Sucursal } from './sucursal.module';
import { Component, OnInit } from '@angular/core';
import { SucursalService } from './sucursal.service';

@Component({
  selector: 'app-acerca-nos',
  templateUrl: './acerca-nos.component.html',
  styleUrls: ['./acerca-nos.component.css']
})
export class AcercaNosComponent implements OnInit {

  constructor(
    private sucursalServicio : SucursalService
  ) { }


  ngOnInit(): void {
    this.sucursalesIterar = this.sucursalServicio.sucursales;
  }
  sucursalesIterar : Sucursal[] = [];


}
