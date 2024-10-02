import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginService } from '../../services/login.service';

// Importar módulos de PrimeNG necesarios para el componente
import { SpeedDialModule } from 'primeng/speeddial';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    // Módulos de PrimeNG que se usan en el componente
    SpeedDialModule,
    SidebarModule,
    PanelMenuModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    PasswordModule,
    GalleriaModule,
    CardModule,
    TableModule,
    ProgressSpinnerModule
  ]
})
export class DashboardComponent implements OnInit {
  displaySidebar: boolean = false;
  menuItems: MenuItem[] = [];
  items: any[] = [];
  showSpeedDial: boolean = false;

  // Definir el tema seleccionado como propiedad de la clase
  selectedTheme: string = 'viva-light';  // Tema predeterminado
   onLogout(): void {
    this.loginService.logout();
    console.log('Sesión cerrada y datos eliminados');
    this.router.navigate(['/login']);
  }
  constructor(private router: Router, private loginService: LoginService) {
    // Definir los ítems del Sidebar
    this.menuItems = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: ['/moodleindex'] }, // Ícono de casa para la página principal
      { label: 'Modulos', icon: 'pi pi-book', routerLink: ['/courses'] }, // Ícono de libro para módulos de curso
      { label: 'Foros', icon: 'pi pi-comments', routerLink: ['/forums'] }, // Ícono de comentarios para foros
    
      {
        label: 'Más información',
        icon: 'pi pi-info-circle', // Ícono de información para submenú de información adicional
        items: [
          { label: 'Tutorial', icon: 'pi pi-bookmark', routerLink: ['/tutorial'] }, // Ícono de marcador para tutoriales
          { label: 'Preguntas Frecuentes', icon: 'pi pi-question-circle', routerLink: ['/faq'] }, // Ícono de pregunta para FAQs
          { label: 'Acerca de', icon: 'pi pi-info', routerLink: ['/about'] }, // Ícono de información para "Acerca de"
          { label: 'Página Oficial', icon: 'pi pi-globe', url: 'https://institutomayor.com.ar/' }, // Ícono de globo para enlace externo
        ]
      },
    
      { separator: true }, // Línea de separación antes de la siguiente sección
      { label: 'Cerrar Sesión', icon: 'pi pi-sign-out', command: () => this.onLogout() }, // Ícono de cerrar sesión para logout
      { label: 'Administración', icon: 'pi pi-cog', routerLink: ['/administration'] }, // Ícono de engranaje para la administración
    ];
    
   

    // Definir las acciones del SpeedDial
    this.items = [
      { label: 'Tema Claro', icon: 'pi pi-sun', command: () => this.changeTheme('viva-light') },
      { label: 'Tema Oscuro', icon: 'pi pi-moon', command: () => this.changeTheme('viva-dark') },
      { label: 'Tema Azul', icon: 'pi pi-palette', command: () => this.changeTheme('arya-blue') },
      // { label: 'Cerrar Sesión', icon: 'pi pi-sign-out', command: () => this.onLogout() }
    ];
  }

  ngOnInit(): void {
    // Leer el tema guardado en localStorage cuando se carga el componente
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      this.selectedTheme = savedTheme;
      this.applyTheme(savedTheme);  // Aplicar el tema al iniciar el componente
    } else {
      this.applyTheme(this.selectedTheme);  // Aplicar tema por defecto
    }
  }

  // Método para cerrar sesión


  // Método para cambiar y guardar el tema en localStorage
  changeTheme(theme: string) {
    this.selectedTheme = theme;  // Actualizar el tema seleccionado
    localStorage.setItem('selectedTheme', theme);  // Guardar en localStorage
    this.applyTheme(theme);
  }

  // Método que realmente aplica el tema
  applyTheme(theme: string) {
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `assets/themes/${theme}/theme.css`;  // Cambiar la referencia del archivo CSS
      console.log(`Tema aplicado: ${theme}`);
    }
  }
}
