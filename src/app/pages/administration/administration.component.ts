import { Component } from '@angular/core';
import { AdminUsersComponent } from "../../components/admin-users/admin-users.component";
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [AdminUsersComponent, DashboardComponent, FooterComponent, RouterLink],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent {

}
