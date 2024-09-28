import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './services/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { ModuleContentComponent } from './components/module-content/module-content.component';
import { InicioMoodleComponent } from './pages/inicio-moodle/inicio-moodle.component';
import { ContentmoodleComponent } from './pages/contentmoodle/contentmoodle.component';
import { IndexMoodleComponent } from './pages/index-moodle/index-moodle.component';

export const routes: Routes = [
    { path: '', component: PresentationComponent },
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent }, // Ruta protegida
    { path: 'moodlestart', component: InicioMoodleComponent, canActivate: [authGuard]},
    { path: 'moodlecontent' , component: ContentmoodleComponent, canActivate: [authGuard] },
    { path: 'moodleindex' , component: IndexMoodleComponent, canActivate: [authGuard] }
   // { path: '**', redirectTo: '' }, // Redirige cualquier ruta no encontrada al login
    // { path: 'slicepage', component: ModuleContentComponent},
    // {path : 'adminusers', component: AdminUsersComponent}

];
