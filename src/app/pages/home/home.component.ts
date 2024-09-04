import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../common/carousel/carousel.component';
import { BienvenidaComponent } from '../common/bienvenida/bienvenida.component';
import { ServiciosComponent } from '../common/servicios/servicios.component';
import { TestimoniosComponent } from '../common/testimonios/testimonios.component';
import { GaleriaComponent } from '../common/galeria/galeria.component';
import { CTAComponent } from '../common/cta/cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CarouselComponent,
    BienvenidaComponent,
    ServiciosComponent,
    TestimoniosComponent,
    GaleriaComponent,
    CTAComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
