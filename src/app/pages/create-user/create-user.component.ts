import { Component } from '@angular/core';
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SignupComponent } from "../../components/signup/signup.component";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [DashboardComponent, FooterComponent, SignupComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

}
