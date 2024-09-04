# Documentación del Desarrollo de la Página Web

## Explicación del Desarrollo

Esta página web se desarrolló utilizando Angular como base, con HTML5, CSS y TypeScript. La estructura de la página se basa en un diseño modular con varios componentes que se dividen en estáticos y dinámicos:

- **Componentes Estáticos**:
  - **Header**: Contiene el logotipo y los enlaces de navegación principales.
  - **Footer**: Muestra información de contacto, enlaces a redes sociales y ubicación en un mapa.

- **Componentes Dinámicos**:
  - **Home**: Sección principal que puede incluir componentes como carruseles, bienvenida, servicios, galería, y llamadas a la acción (CTA).
  - **About**: Proporciona información sobre la empresa, su misión, valores y equipo.
  - **Contact**: Formulario de contacto para que los usuarios puedan enviar mensajes directamente desde la página.
  - **Services**: Detalla los servicios ofrecidos, con tarjetas para cada servicio y modales para más información.

## Componentes y Estructura

### Header

El componente del header (`header.component.html` y `header.component.css`) incluye la navegación principal con el logotipo de la empresa y enlaces a secciones clave como Inicio, Sobre Nosotros, Servicios, Portafolio y Contacto.

### Footer

El componente del footer (`footer.component.html` y `footer.component.css`) ofrece un resumen de la empresa, enlaces a productos, redes sociales, información de contacto y un mapa de ubicación.

### Home

El componente Home (`home.component.html` y `home.component.css`) incluye varios subcomponentes:
- **Carousel**: Un carrusel de imágenes.
- **Bienvenida**: Mensaje de bienvenida.
- **Servicios**: Resumen de servicios ofrecidos.
- **Galería**: Muestra de imágenes o proyectos.
- **CTA (Call to Action)**: Llamadas a la acción para convertir a los visitantes.

### About

El componente About (`about.component.html` y `about.component.css`) proporciona una visión general de la empresa, incluyendo:
- **Historia**: Resumen de la evolución de la empresa.
- **Equipo**: Información sobre el equipo.
- **Visión**: Declaración de visión de la empresa.

### Contact

El componente Contact (`contact.component.html` y `contact.component.css`) incluye un formulario de contacto donde los usuarios pueden enviar sus datos:
- **Nombre**
- **Número de Teléfono**
- **Mensaje**

### Services

El componente Services (`services.component.html` y `services.component.css`) muestra los servicios ofrecidos por la empresa, destacando ventajas y beneficios con modales para más información.

## Estilos y Diseño

- **General**: La mayoría de los componentes utilizan un diseño modular con márgenes y rellenos ajustables para mejorar la separación y la legibilidad.
- **Formularios**: Estilizados para ser claros y accesibles, con validación de entrada y mensajes de error en tiempo real.
- **Tarjetas y Botones**: Diseñados con sombras y efectos de hover para proporcionar una experiencia de usuario más interactiva.

## Consideraciones Adicionales

- **Responsive Design**: Todos los componentes están diseñados para ser responsivos y se adaptan a diferentes tamaños de pantalla.
- **Accesibilidad**: Se han añadido atributos ARIA y prácticas recomendadas para mejorar la accesibilidad de la página.

Este documento proporciona una visión general de la estructura y los componentes de la página web desarrollada, así como las principales características y estilos utilizados.
