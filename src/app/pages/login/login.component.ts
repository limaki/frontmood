import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { AuthenticationRequest } from '../../models/auth.models';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { SweetAlert2Module, SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { filter } from 'rxjs';
import { ViewportScroller } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    FooterComponent,
    SweetAlert2Module,
    ProgressSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authRequest: AuthenticationRequest = { email: '', password: '' };
  errorMessage: string = '';
  loading: boolean = false; // Variable para controlar el estado de carga

  constructor(
    private authService: LoginService,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  // Referencias a SwalComponent para éxito y error
  @ViewChild('loginSuccess', { static: true }) loginSuccess!: SwalComponent;
  @ViewChild('loginError', { static: true }) loginError!: SwalComponent;
  @ViewChild('noTokenError', { static: true }) noTokenError!: SwalComponent;

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.viewportScroller.scrollToAnchor('top');
      });
  }

  login() {
    this.loading = true; // Mostrar spinner al iniciar la petición
    this.errorMessage = '';

    this.authService.login(this.authRequest).subscribe(
      (response) => {
        this.loading = false; // Ocultar spinner cuando se reciba la respuesta
        if (response && response.jwt) {
          localStorage.setItem('token', response.jwt);
          console.log('JWT almacenado con éxito:', response.jwt);

          if (this.loginSuccess) {
            this.loginSuccess.fire().then(() => {
              this.router.navigate(['/moodlestart']);
            });
          }
        } else {
          this.errorMessage = 'No token received';
          console.error('No se recibió un JWT en la respuesta.');

          if (this.noTokenError) {
            this.noTokenError.fire();
          }
        }
      },
      (error) => {
        this.loading = false; // Ocultar spinner en caso de error
        this.errorMessage = 'Email o contraseña inválido(s)';
        console.error('Error en el inicio de sesión:', error);

        if (this.loginError) {
          this.loginError.fire();
        }
      }
    );
  }
}
