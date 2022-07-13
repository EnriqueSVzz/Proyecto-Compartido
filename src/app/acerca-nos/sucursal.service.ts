import { Sucursal } from './sucursal.module';

export class SucursalService {
  //definimos una arreglo
  sucursales : Sucursal[] = [
    new Sucursal(
        "Apodaca",
        "Centro de Apodaca entre 5 de Mayo y Constituyentes dentro",
        "8117430510",
        66768,
        "https://propiedadescom.s3.amazonaws.com/files/600x400/apodaca-centro-apodaca-nuevo-leon-24603484-foto-01.jpg",
        "https://www.google.com.mx/maps/dir/25.7445103,-100.159122/centro+de+apodaca/@25.7631439,-100.1925926,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8662ec0bbf1be69d:0x95e5a13534c97659!2m2!1d-100.188726!2d25.7816767"
    ),
    new Sucursal(
      "San Nicolas",
      "A lado de Universidad enfrente de la Biblioteca Universitaria",
      "8113233345",
      66472,
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Avenida_Universidad_-_San_Nicol%C3%A1s_de_los_Garza.JPG/800px-Avenida_Universidad_-_San_Nicol%C3%A1s_de_los_Garza.JPG",
      "https://www.google.com.mx/maps/dir//Universidad+Aut%C3%B3noma+de+Nuevo+Le%C3%B3n,+Pedro+de+Alba+S%2FN,+Ni%C3%B1os+H%C3%A9roes,+Ciudad+Universitaria,+San+Nicol%C3%A1s+de+los+Garza,+N.L./data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8662945396e136af:0x742b1e8288ee57a8?sa=X&ved=2ahUKEwj-0qyouvb4AhV2oWoFHXTLAaoQ48ADegQIAhAT"
  ),
  ];
}
