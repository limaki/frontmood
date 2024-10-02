import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule, // IMPORTAR ReactiveFormsModule AQUÍ
    ToastModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ProgressSpinnerModule,
  ],
  providers: [MessageService],
})
export class SignupComponent {
  signupForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private messageService: MessageService
  ) {
    this.signupForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.isLoading = true;
      const signupRequest = this.signupForm.value;

      this.loginService.signup(signupRequest).subscribe(
        () => {
          this.isLoading = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Registro Exitoso',
            detail: 'El usuario ha sido registrado exitosamente.',
          });
          this.signupForm.reset();
        },
        (error) => {
          this.isLoading = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Error de Registro',
            detail: 'Hubo un error al registrar el usuario. Intente nuevamente.',
          });
          console.error('Error en el registro: ', error);
        }
      );
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Formulario Inválido',
        detail: 'Por favor, complete todos los campos correctamente.',
      });
    }
  }
}
