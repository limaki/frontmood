import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { GalleriaModule } from 'primeng/galleria';

import { AdminUsersComponent } from '../admin-users/admin-users.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';


//scroller
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [InputTextModule,
            PasswordModule,
            ButtonModule,
            GalleriaModule,
            AdminUsersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  private viewportScroller = inject(ViewportScroller);

  constructor(private router:Router){

  }


  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      console.log('Navegación completada: desplazando hacia la parte superior');
      
      // Forzar desplazamiento a la parte superior
      this.viewportScroller.scrollToAnchor('top');  // Usamos scrollToAnchor
    });
  }
  
}


