import { Component } from '@angular/core';
import { ModuleContentComponent } from '../../components/module-content/module-content.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

import { PanelModule } from 'primeng/panel';

import { DividerModule } from 'primeng/divider';
import { AngularstartComponent } from "../../components/angularstart/angularstart.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-inicio-moodle',
  standalone: true,
  imports: [ModuleContentComponent, DashboardComponent, PanelModule, DividerModule, AngularstartComponent, FooterComponent],
  templateUrl: './inicio-moodle.component.html',
  styleUrl: './inicio-moodle.component.css'
})
export class InicioMoodleComponent {

}
