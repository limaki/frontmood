import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { AuthenticationRequest } from '../../models/auth.models';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

// Importaciones de PrimeNG
import { InputTextModule } from 'primeng/inputtext';  // Módulo para campos de texto
import { PasswordModule } from 'primeng/password';    // Módulo para campo de contraseña
import { ButtonModule } from 'primeng/button';        // Módulo para el botón de login

// Importar SweetAlert2
import Swal from 'sweetalert2';
import { filter } from 'rxjs';

//scroller
import { ViewportScroller } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf,
    InputTextModule,
    PasswordModule,
    ButtonModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authRequest: AuthenticationRequest = { email: '', password: '' };
  errorMessage: string = '';

  private viewportScroller = inject(ViewportScroller);

  constructor(private authService: LoginService, private router: Router) {}

  ngOnInit() {
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      console.log('Navegación completada: desplazando hacia la parte superior');
      
      // Forzar desplazamiento a la parte superior
      this.viewportScroller.scrollToAnchor('top');  // Usamos scrollToAnchor
    });
    
  }

  login() {
    this.authService.login(this.authRequest).subscribe(
      (response) => {
        // Si el login es exitoso y recibimos el token JWT
        if (response && response.jwt) {
          // Almacenar el token JWT en el almacenamiento local
          localStorage.setItem('token', response.jwt);
          console.log('JWT almacenado con éxito:', response.jwt);

          // Mostrar alerta de éxito con SweetAlert2
          Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: 'Has iniciado sesión correctamente.',
            confirmButtonColor: '#a31963'
          }).then(() => {
            // Redirigir al dashboard u otra ruta protegida después de la alerta
            this.router.navigate(['/moodlestart']);
          });
        } else {
          // Si no hay JWT en la respuesta, mostrar un error
          this.errorMessage = 'No token received';
          console.error('No se recibió un JWT en la respuesta.');

          // Mostrar alerta de error con SweetAlert2
          Swal.fire({
            icon: 'error',
            title: 'Error en el servidor',
            text: 'No se recibió un token, por favor intente más tarde.',
            confirmButtonColor: '#a31963'
          });
        }
      },
      (error) => {
        // Si ocurre un error, mostrar mensaje de error y alerta de fallo
        this.errorMessage = 'Email o contraseña inválido(s)';
        console.error('Error en el inicio de sesión:', error);

        // Mostrar alerta de error con SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Inicio de sesión fallido',
          text: 'El correo electrónico o la contraseña son incorrectos.',
          confirmButtonColor: '#a31963'
        });
      }
    );
  }
}
