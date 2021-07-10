import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { categoria } from 'src/app/shared/components/interface/interface';
import { MercadoLibreService } from 'src/app/shared/services/mercado-libre.service';
import { SwiperComponent } from "swiper/angular";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  categoriaSubscription: Subscription;
  itemsSubscription: Subscription;
  obtenerArticuloSubscrition: Subscription;
  categorias: categoria[] = [];
  productosPorCategoria: any[] = [];
  categoriaActual: any;
  obtenerArticulos: any

  constructor(private srvMercadoLibre: MercadoLibreService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerCategorias();

  }

  ngOnDestroy(): void {
    this.categoriaSubscription && this.categoriaSubscription.unsubscribe();
    this.itemsSubscription && this.itemsSubscription.unsubscribe();
    this.obtenerArticuloSubscrition && this.obtenerArticuloSubscrition.unsubscribe();
  }

  obtenerCategorias() {
    this.categoriaSubscription = this.srvMercadoLibre.obtenerListaCategoria().subscribe(
      categorias => {
        this.categorias = categorias
        this.buscarCategoria('Ropa y Accesorios');
        this.obtnerItemsCategoria(this.categoriaActual.id);
        this.obtnerArticulo();
      },
      error => console.log(error)
    );
  }

  buscarCategoria(criterioBusqueda: string) {
    this.categoriaActual = this.categorias.find(categoria => categoria.name == criterioBusqueda)
  }


  obtnerItemsCategoria(categoriaId: string) {
    this.itemsSubscription = this.srvMercadoLibre.obtenerItemsCategoria(categoriaId).subscribe(
      productosPorCategoria => {
        this.productosPorCategoria = productosPorCategoria
      },
      error => console.log(error)
    );
  }


  obtnerArticulo() {
    this.obtenerArticuloSubscrition = this.srvMercadoLibre.obtenerArticulos().subscribe(
      articulosPorCategoriaAbrigo => {
        this.obtenerArticulos = articulosPorCategoriaAbrigo
      },
      error => console.log(error)
    );
  }

  guardarLocalStorage(producto: any) {
    localStorage.setItem('producto', JSON.stringify(producto));
    this.router.navigate(['/details']);
  }

}
