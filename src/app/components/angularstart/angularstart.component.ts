import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-angularstart',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterLink],
  templateUrl: './angularstart.component.html',
  styleUrl: './angularstart.component.css'
})
export class AngularstartComponent {

}
