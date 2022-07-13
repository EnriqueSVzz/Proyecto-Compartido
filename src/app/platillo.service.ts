import { Platillo } from './platillo.module';

export class PlatilloServie{
  platillosArray : Platillo[] = [
    new Platillo(
      1,
      "Hamburguesa al carbón",
      75,
      "Hamburguesa de res media libra con todo",
      "Se acompaña de un resfresco individual con una porción de papas fritas con sal",
      "https://static9.depositphotos.com/1588534/1095/i/450/depositphotos_10957218-stock-photo-hamburger-and-fries.jpg",
      "20-30 minutos",
      4
      ),
    new Platillo(
      2,
      "Fajitas de Pollo",
      90,
      "Parrilla de Fajitas de pollo marinadas a las brasas",
      "Incluyen un refreso grande de 2.5 lts del sabor que usted desee además un paquete de tortillas con 10 salchichas asadas",
      "https://static01.nyt.com/images/2016/05/17/dining/chicken-fajitas/chicken-fajitas-articleLarge.jpg",
      "40-50 minutos",
      5
    )
  ];

}

/*
    public id:string,
    public nombre:string,
    public precio:string,
    public descripcion: string,
    public acompanamientos: string,
    public imagen: string
*/
