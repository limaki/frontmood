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
    SweetAlert2Module // Importación directa sin .forRoot()
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authRequest: AuthenticationRequest = { email: '', password: '' };
  errorMessage: string = '';

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
    this.authService.login(this.authRequest).subscribe(
      (response) => {
        if (response && response.jwt) {
          localStorage.setItem('token', response.jwt);
          console.log('JWT almacenado con éxito:', response.jwt);

          // Verificar que SwalComponent esté disponible antes de llamar a fire()
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
        this.errorMessage = 'Email o contraseña inválido(s)';
        console.error('Error en el inicio de sesión:', error);

        if (this.loginError) {
          this.loginError.fire();
        }
      }
    );
  }
}
