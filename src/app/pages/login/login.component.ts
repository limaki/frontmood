import { Component, ViewChild, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { AuthenticationRequest } from '../../models/auth.models';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
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
    SweetAlert2Module // Importamos SweetAlert2Module en las imports del componente
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authRequest: AuthenticationRequest = { email: '', password: '' };
  errorMessage: string = '';

  private viewportScroller = inject(ViewportScroller);

  // Referencias a SwalComponent para éxito y error
  @ViewChild('loginSuccess') loginSuccess!: SwalComponent;
  @ViewChild('loginError') loginError!: SwalComponent;
  @ViewChild('noTokenError') noTokenError!: SwalComponent;

  constructor(private authService: LoginService, private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      console.log('Navegación completada: desplazando hacia la parte superior');
      this.viewportScroller.scrollToAnchor('top');
    });
  }

  login() {
    this.authService.login(this.authRequest).subscribe(
      (response) => {
        if (response && response.jwt) {
          localStorage.setItem('token', response.jwt);
          console.log('JWT almacenado con éxito:', response.jwt);

          // Mostrar alerta de éxito usando SwalComponent
          this.loginSuccess.fire().then(() => {
            this.router.navigate(['/moodlestart']);
          });
        } else {
          this.errorMessage = 'No token received';
          console.error('No se recibió un JWT en la respuesta.');

          // Mostrar alerta de error usando SwalComponent
          this.noTokenError.fire();
        }
      },
      (error) => {
        this.errorMessage = 'Email o contraseña inválido(s)';
        console.error('Error en el inicio de sesión:', error);

        // Mostrar alerta de error usando SwalComponent
        this.loginError.fire();
      }
    );
  }
}
