import { Component } from '@angular/core';
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { AngularstartComponent } from "../../components/angularstart/angularstart.component";
import { PanelModule } from 'primeng/panel';
import { IndexContentComponent } from "../../components/index-content/index-content.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-index-moodle',
  standalone: true,
  imports: [DashboardComponent, AngularstartComponent, PanelModule, IndexContentComponent, FooterComponent],
  templateUrl: './index-moodle.component.html',
  styleUrl: './index-moodle.component.css'
})
export class IndexMoodleComponent {

}
