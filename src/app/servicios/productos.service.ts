import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'https://sgacineteca-production.up.railway.app/api/productos';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
