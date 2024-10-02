import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-module-content',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule, RouterLink],
  templateUrl: './module-content.component.html',
  styleUrls: ['./module-content.component.css']
})
export class ModuleContentComponent {
  pages = [
    {
      title: 'Introducción al Módulo',
      content: 'Este módulo cubre los fundamentos del curso. En esta sección veremos una descripción general de los temas principales que aprenderás. Conocerás los conceptos básicos y avanzados que necesitas dominar para tener un entendimiento claro y conciso de Angular.',
      additionalInfo: 'En esta introducción se cubren los objetivos del módulo, el contexto del contenido, y cómo los conceptos se relacionan entre sí. Es recomendable revisar esta sección antes de avanzar para tener un panorama claro de lo que verás en las siguientes lecciones.',
      details: [
        'Evolución de Angular y su lugar en el ecosistema de desarrollo web moderno.',
        '¿Por qué elegir Angular frente a otras herramientas como React o Vue.js?',
        'Casos de uso de Angular en aplicaciones empresariales.',
        'Explicación de las ventajas y características clave de Angular.'
      ],
      examples: [
        'Ejemplos de aplicaciones creadas con Angular: Google Cloud Console, Microsoft Office Online.',
        'Demostraciones de cómo Angular gestiona el enrutamiento y la modularización.'
      ]
    },
    {
      title: 'Lección 1: Conceptos Básicos',
      content: 'En esta lección aprenderás los conceptos básicos necesarios para entender el contenido avanzado del curso. Estos conceptos incluyen la estructura de un proyecto Angular, creación de componentes, y el ciclo de vida de un componente.',
      additionalInfo: 'Se abordarán también las diferencias entre las versiones de Angular, cómo inicializar un proyecto y se cubrirán las buenas prácticas para estructurar un proyecto desde cero. Esta lección es fundamental para construir una base sólida.',
      details: [
        'Estructura de un Proyecto Angular: qué archivos son necesarios y cómo organizarlos.',
        'Cómo funciona el ciclo de vida de un componente Angular.',
        'Diferencias entre componentes y directivas.',
        'Uso de decoradores y propiedades para crear interfaces dinámicas.'
      ],
      examples: [
        'Creación de un componente básico y su integración en un módulo.',
        'Demostración de cómo funciona el ciclo de vida de un componente con hooks como ngOnInit, ngOnChanges, etc.'
      ]
    },
    {
      title: 'Lección 2: Fundamentos Avanzados',
      content: 'Fundamentos avanzados del tema, incluyendo teoría y ejemplos prácticos. En esta lección, te introducirás en la gestión del estado con NgRx, la carga diferida de módulos y la optimización de rendimiento en Angular.',
      additionalInfo: 'Vamos a explorar patrones avanzados de desarrollo para construir aplicaciones modulares y escalables. También aprenderás a manejar el flujo de datos con NgRx y a crear aplicaciones de alto rendimiento mediante estrategias de carga diferida y optimización de detectores de cambio.',
      details: [
        'Implementación del patrón Redux en Angular con NgRx.',
        'Creación de acciones, reducers y efectos para manejar eventos de la aplicación.',
        'Optimización del rendimiento con Change Detection Strategy.',
        'Uso de Lazy Loading para optimizar el tamaño del paquete.'
      ],
      examples: [
        'Ejemplo de implementación de un sistema de gestión de usuarios con NgRx.',
        'Demostración de Lazy Loading en rutas con módulos dinámicos.'
      ]
    },
    {
      title: 'Cuestionario del Módulo',
      content: 'Cuestionario del módulo para evaluar lo que has aprendido en este módulo. Asegúrate de repasar todas las secciones antes de comenzar. Estas preguntas están diseñadas para verificar tu comprensión y asegurarte de que puedes aplicar los conocimientos adquiridos.',
      additionalInfo: 'Las respuestas correctas te guiarán a través de las mejores prácticas y el uso eficiente de Angular en aplicaciones reales. Si no aciertas una pregunta, no te preocupes: revisa las lecciones anteriores y vuelve a intentarlo.',
      details: [
        'Preguntas de opción múltiple sobre la estructura y componentes de Angular.',
        'Casos prácticos para identificar errores en el código.',
        'Explicación de conceptos clave como inyección de dependencias y modularización.'
      ]
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
