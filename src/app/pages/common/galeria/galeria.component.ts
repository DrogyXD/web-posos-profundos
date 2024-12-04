import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  selectedMedia: string = ''; // URL del medio seleccionado (imagen o video)
  selectedTitle: string = ''; // Título del medio
  selectedDescription: string = ''; // Descripción del medio

  // Método para abrir el modal
  openModal(mediaUrl: string, title: string, description: string): void {
    this.selectedMedia = mediaUrl;
    this.selectedTitle = title;
    this.selectedDescription = description;

    // Abre el modal utilizando Bootstrap
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // Comprueba si el medio es un video
  isVideo(mediaUrl: string): boolean {
    return mediaUrl.endsWith('.mp4') || mediaUrl.endsWith('.webm') || mediaUrl.endsWith('.ogg');
  }
}
