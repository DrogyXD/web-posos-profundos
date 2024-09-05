import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProductosService } from '../../servicios/productos.service'; // Asegúrate de importar correctamente el servicio
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Para usar 'mat-label' y campos de texto

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RouterLink,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'descripcion', 'cantidad', 'imagen', 'acciones'];
  dataSource = new MatTableDataSource<any>();
  productos: any[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  showStockUpdateForm: boolean = false;
  stockQuantity: number = 0;
  productIdToUpdate: string | null = null;

  constructor(
    private productoService: ProductosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    } else {
      console.warn('Paginator not initialized');
    }
  }

  crearProducto() {
    this.router.navigate(['inventario/crearProducto']);
  }

  editarProducto(id: string) {
    this.router.navigate(['/inventario/editarProducto', id]);
  }

  obtenerProductos(): void {
    this.productoService.obtenerProductos().subscribe(
      (response) => {
        this.dataSource.data = response;
        console.log('Productos cargados:', this.dataSource.data);
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  openStockUpdateForm(productId: string): void {
    this.productIdToUpdate = productId;
    this.showStockUpdateForm = true;
  }

  closeStockUpdateForm(): void {
    this.showStockUpdateForm = false;
    this.productIdToUpdate = null;
    this.stockQuantity = 0;
  }

  updateStock(): void {
    if (this.productIdToUpdate) {
      this.productoService.actualizarStockProducto(this.productIdToUpdate, this.stockQuantity).subscribe({
        next: (response) => {
          console.log('Stock actualizado con éxito');
          this.obtenerProductos();
          this.closeStockUpdateForm();
        },
        error: (error) => {
          console.error('Error al actualizar stock:', error);
        }
      });
    }
  }

  eliminarProducto(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.productoService.eliminarProducto(id).subscribe({
        next: (response) => {
          console.log('Producto eliminado:', response.msg);
          this.obtenerProductos();
        },
        error: (error) => {
          console.error('Error al eliminar producto:', error);
        }
      });
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
