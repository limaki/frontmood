import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inyecta el servicio Router
  const token = localStorage.getItem('token'); // Obtener el token JWT desde localStorage

  // Verificar si el token existe
  if (token) {
    console.log('Acceso permitido a la ruta:', route.url);
    return true;  // Permitir el acceso si el token está presente
  } else {
    console.log('Acceso denegado. Redirigiendo a login. Intento de acceder a:', state.url);
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } }); // Redirigir al login
    return false;
  }
};
