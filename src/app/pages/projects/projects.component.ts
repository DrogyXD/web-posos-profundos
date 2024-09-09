import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  productos: any[] = [];

  constructor(private ProductosService: ProductosService) { }

  ngOnInit(): void {
    this.ProductosService.getProductos().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }
}
