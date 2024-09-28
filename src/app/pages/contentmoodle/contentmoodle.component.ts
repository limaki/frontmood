import { Component } from '@angular/core';
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { PanelModule } from 'primeng/panel';
import { ModuleContentComponent } from "../../components/module-content/module-content.component";
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-contentmoodle',
  standalone: true,
  imports: [DashboardComponent, PanelModule, ModuleContentComponent, FooterComponent],
  templateUrl: './contentmoodle.component.html',
  styleUrl: './contentmoodle.component.css'
})
export class ContentmoodleComponent {

}
