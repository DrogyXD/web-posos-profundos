import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'https://sgacineteca-production.up.railway.app/api/productos'; // Concatenado con api/productos

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    const headers = new HttpHeaders({ 'Cache-Control': 'no-cache' });
    return this.http.get(this.apiUrl, { headers });
  }
}
