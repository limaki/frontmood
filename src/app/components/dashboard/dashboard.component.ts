import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { GalleriaModule } from 'primeng/galleria';

import { AdminUsersComponent } from '../admin-users/admin-users.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//scroller
import { ViewportScroller } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';




import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SpeedDialModule } from 'primeng/speeddial';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [InputTextModule,
            PasswordModule,
            ButtonModule,
            GalleriaModule,
            AdminUsersComponent,
            CardModule,
            TableModule,
            ProgressSpinnerModule,
          
            PanelMenuModule,
            SidebarModule,
            MenuModule,
            SpeedDialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  // private viewportScroller = inject(ViewportScroller);

  // constructor(private router:Router){

  // }


  // ngOnInit() {
  //   this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd)
  //   ).subscribe(() => {
  //     console.log('Navegación completada: desplazando hacia la parte superior');
      
  //     // Forzar desplazamiento a la parte superior
  //     this.viewportScroller.scrollToAnchor('top');  // Usamos scrollToAnchor
  //   });
  // }


  // Definir el modelo para los elementos del SpeedDial
  items: any[] = [];

  // Variable para controlar la visibilidad del SpeedDial
  showSpeedDial: boolean = false;





constructor(){
  this.items = [
    { label: 'Perfil', icon: 'pi pi-user-edit', command: () => this.onProfile() },
    { label: 'Configuración', icon: 'pi pi-cog', command: () => this.onSettings() },
    { label: 'Cerrar Sesión', icon: 'pi pi-sign-out', command: () => this.onLogout() }
  ];
}





  displaySidebar: boolean = false;  // Controla la visualización del sidebar

  // Definir los elementos del menú
  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/dashboard'] },
    { label: 'Mis Cursos', icon: 'pi pi-book', routerLink: ['/courses'] },
    {
      label: 'Evaluaciones',
      icon: 'pi pi-pencil',
      items: [
        { label: 'Tareas', icon: 'pi pi-file', routerLink: ['/tasks'] },
        { label: 'Exámenes', icon: 'pi pi-check-square', routerLink: ['/exams'] }
      ]
    },
    { label: 'Foros', icon: 'pi pi-comments', routerLink: ['/forums'] },
    { label: 'Configuración', icon: 'pi pi-cog', routerLink: ['/settings'] }
  ];

  ngOnInit(): void {
    
  }

  changeTheme(theme: string) {
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;

    // Cambia la URL del archivo CSS al tema seleccionado
    themeLink.href = `assets/themes/${theme}/theme.css`;
  }





  


  // Métodos para cada comando
  onProfile() {
    console.log('Perfil seleccionado');
  }

  onSettings() {
    console.log('Configuración seleccionada');
  }

  onLogout() {
    console.log('Sesión cerrada');
  }

  // Método para alternar la visibilidad del SpeedDial
  toggleSpeedDial() {
    this.showSpeedDial = !this.showSpeedDial;
  }
  
}


