import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { categoria } from '../components/interface/interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MercadoLibreService {

  env = environment;
  listaCategoria?: categoria;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'APP_USR-12345678-031820-X-12345678'
    })
  };

  constructor(private http: HttpClient) { }

  obtenerListaCategoria(): Observable<categoria[]> {
    return this.http.get<categoria[]>(`${this.env.api}/sites/MCO/categories`, this.httpOptions);
  }

  obtenerItemsCategoria(categoriaId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.env.api}/categories/${categoriaId}`, this.httpOptions)
  }

  obtenerArticulos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.env.api}/sites/MCO/search?category=MCO455528`, this.httpOptions)
  }

  buscarProducto(filtro: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.env.api}/sites/MCO/search?q=${filtro}`, this.httpOptions)
  }

}