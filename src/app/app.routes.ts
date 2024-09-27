import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { PresentationComponent } from './components/presentation/presentation.component';

export const routes: Routes = [
    { path: '', component: PresentationComponent },
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }, // Ruta protegida
    { path: '**', redirectTo: '' }, // Redirige cualquier ruta no encontrada al login
    {path : 'adminusers', component: AdminUsersComponent}

];
