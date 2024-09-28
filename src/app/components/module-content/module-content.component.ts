import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-module-content',
  standalone: true,
  imports: [CardModule,ButtonModule,CommonModule, RouterLink],
  templateUrl: './module-content.component.html',
  styleUrl: './module-content.component.css'
})
export class ModuleContentComponent {



  pages = [
    {
      title: 'Introducción al Módulo',
      content: 'Este módulo cubre los fundamentos del curso. En esta sección veremos una descripción general de los temas principales que aprenderás.'
    },
    {
      title: 'Lección 1: Conceptos Básicos',
      content: 'En esta lección aprenderás los conceptos básicos necesarios para entender el contenido avanzado del curso.'
    },
    {
      title: 'Lección 2: Fundamentos Avanzados',
      content: 'Fundamentos avanzados del tema, incluyendo teoría y ejemplos prácticos.'
    },
    {
      title: 'Cuestionario del Módulo',
      content: 'Cuestionario del módulo para evaluar lo que has aprendido en este módulo.'
    }
  ];

  // Estado del componente: Página actual
  currentPageIndex = 0;

  // Método para avanzar a la siguiente página
  nextPage() {
    if (this.currentPageIndex < this.pages.length - 1) {
      this.currentPageIndex++;
    }
  }

  // Método para retroceder a la página anterior
  prevPage() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
    }
  }
}
