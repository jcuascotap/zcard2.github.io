import { Component } from '@angular/core';
import { CardMockComponent } from '../card-mock/card-mock.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CardMockComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
