import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BienvenidaComponent } from './pages/common/bienvenida/bienvenida.component';
import { CarouselComponent } from './pages/common/carousel/carousel.component';
import { CTAComponent } from './pages/common/cta/cta.component';
import { GaleriaComponent } from './pages/common/galeria/galeria.component';
import { TestimoniosComponent } from './pages/common/testimonios/testimonios.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    HeaderComponent,
    FormsModule,
    RouterModule,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ProjectsComponent,
    BienvenidaComponent,
    CarouselComponent,
    CTAComponent,
    GaleriaComponent,
    TestimoniosComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-pozos-profundos';
}
