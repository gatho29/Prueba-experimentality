import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.scss']
})
export class ProductsSectionComponent implements OnInit {

  public cardsInformation: Array<any> = []

  constructor() { }

  ngOnInit(): void {
    this.cardsInformation = [{
      title: 'MODA INFANTIL',
      img: '../../../../assets/images/categorias-destacadas-moda-infantil@2x.png',
      ruta: 'childish'
    },
    {
      title: 'PROTECCIÓN',
      img: '../../../../assets/images/categorias-destacadas-proteccion.png',
      ruta: 'protection'
    }
    ]
  }
}
