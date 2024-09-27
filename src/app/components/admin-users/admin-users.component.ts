import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service'; // Asegúrate de que la ruta sea correcta
import { User } from '../../models/users.models';  // Modelo del usuario
import { MessageService } from 'primeng/api';  // Para mostrar mensajes
import { NgIf } from '@angular/common';

import { TableModule } from 'primeng/table';  // Módulo de PrimeNG para la tabla
import { ToastModule } from 'primeng/toast';  // Módulo de PrimeNG para mensajes toast
import { ProgressSpinnerModule } from 'primeng/progressspinner'; // Módulo de PrimeNG para el spinner
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [NgIf, TableModule,
                  ToastModule,
                  ProgressSpinnerModule,
                  ButtonModule],
  providers: [MessageService],  // Añadir el MessageService aquí
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'] // Corregir styleUrl a styleUrls
})
export class AdminUsersComponent implements OnInit {
  users: User[] = [];
  loading: boolean = false;

  constructor(private userService: LoginService, private messageService: MessageService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;  // Activar el spinner de carga
    this.userService.getAllUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        this.loading = false;

        // Mostrar mensaje de éxito usando PrimeNG
        this.messageService.add({ severity: 'success', summary: 'Usuarios cargados', detail: 'Se cargaron los usuarios correctamente' });
      },
      (error) => {
        this.loading = false;

        // Mostrar mensaje de error usando PrimeNG
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema al cargar los usuarios.' });
        console.error('Error al cargar usuarios', error);
      }
    );
  }


// Eliminar un usuario
deleteUser(id: number) {
  this.userService.deleteUser(id).subscribe(
    () => {
      // Eliminar el usuario localmente del arreglo de usuarios
      this.users = this.users.filter(user => user.id !== id);

      // Mostrar mensaje de éxito
      this.messageService.add({ severity: 'success', summary: 'Usuario eliminado', detail: 'El usuario fue eliminado correctamente' });
    },
    (error) => {
      // Mostrar mensaje de error
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar el usuario' });
      console.error('Error al eliminar usuario', error);
    }
  );
}



}









 

