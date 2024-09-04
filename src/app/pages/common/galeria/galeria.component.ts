import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  selectedImage: string = '';
  selectedTitle: string = '';
  selectedDescription: string = '';

  openModal(imageUrl: string, title: string, description: string) {
    this.selectedImage = imageUrl;
    this.selectedTitle = title;
    this.selectedDescription = description;
    // Abre el modal
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
