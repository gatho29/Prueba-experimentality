import { Component, OnInit } from '@angular/core';
import { eventos } from 'src/app/shared/components/interface/events';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.scss']
})
export class DetailsProductsComponent implements OnInit {

  item: any = {};

  constructor(private abelardito: eventos) { }

  ngOnInit(): void {
    this.extraerProductos();
    this.abelardito.events$.subscribe((producto) => {
      this.item = producto
    })
  }

  extraerProductos() {
    this.item = JSON.parse(localStorage.getItem('producto') as string)
  }
}
