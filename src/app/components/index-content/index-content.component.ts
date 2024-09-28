import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterModule } from '@angular/router';



@Component({
  selector: 'app-index-content',
  standalone: true,
  imports: [CardModule, ButtonModule,RouterLink,RouterModule],
  templateUrl: './index-content.component.html',
  styleUrl: './index-content.component.css'
})
export class IndexContentComponent {

}
