import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importar BrowserAnimationsModule

import { routes } from './app.routes';
import { JwtInterceptorService } from '../app/services/jwtreceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true, // Permite registrar múltiples interceptores
    },
    importProvidersFrom(BrowserAnimationsModule) // Incluir BrowserAnimationsModule aquí
  ]
};
