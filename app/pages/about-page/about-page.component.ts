import { Component } from '@angular/core';
import { CreditsDynamicsComponent } from '../../components/About/credits-dynamics/credits-dynamics.component';
import { DiverAtuomaticsComponent } from '../../components/About/diver-atuomatics/diver-atuomatics.component';
import { PersonalyzedComponent } from '../../components/About/personalyzed/personalyzed.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CreditsDynamicsComponent, DiverAtuomaticsComponent, PersonalyzedComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
