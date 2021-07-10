import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MercadoLibreService } from '../../services/mercado-libre.service';
import { eventos } from '../interface/events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  buscarProductoSubscription: Subscription;
  filtroProducto?: Subscription;
  filtro = '';
  resultadoBusqueda: any;
  public isLoading = false;

  constructor(private srvMercadoLibre: MercadoLibreService, private router: Router, private abelardo: eventos) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.buscarProductoSubscription && this.buscarProductoSubscription.unsubscribe();
  }

  buscarProductos() {
    this.buscarProductoSubscription = this.srvMercadoLibre.buscarProducto(this.filtro).subscribe(
      filtroProducto => {
        this.resultadoBusqueda = filtroProducto
      },
      error => console.log(error)
    );
  }

  guardarLocalStorage(producto: any) {
    this.abelardo.events.next(producto)
    localStorage.setItem('producto', JSON.stringify(producto));
    this.router.navigate(['/details']);
  }

  focusOutInput() {
    setTimeout(() => {
      this.resultadoBusqueda = '';
    }, 400)
  }

}
