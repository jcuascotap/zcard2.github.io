import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/Home/header/header.component';
import { FeaturesComponent } from '../../components/Home/features/features.component';
import { RequisitosComponent } from '../../components/Home/requisitos/requisitos.component';
import { BenefitsComponent } from '../../components/Home/benefits/benefits.component';
import { TestimonialsComponent } from '../../components/Home/testimonials/testimonials.component';
import { SuscribeteComponent } from '../../components/Home/suscribete/suscribete.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, FeaturesComponent, BenefitsComponent, RequisitosComponent, TestimonialsComponent, SuscribeteComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
