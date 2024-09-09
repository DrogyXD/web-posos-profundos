import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule  // Importamos ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;  // Añadimos el operador ! para indicar que se inicializará antes de usarse

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const whatsappNumber = '523333847983'; // Reemplaza con tu número de WhatsApp en formato internacional
      const name = this.contactForm.get('name')?.value;
      const phone = this.contactForm.get('phone')?.value;
      const message = this.contactForm.get('message')?.value;

      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, mi nombre es ${name}. Mi número de contacto es ${phone}. ${message}`)}`;
      window.open(url, '_blank');
    }
  }
}
