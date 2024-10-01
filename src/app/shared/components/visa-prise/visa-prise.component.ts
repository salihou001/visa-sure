import { Component, input } from '@angular/core';
import { VisaPrise } from '../../models/visa-prise.model';

@Component({
  selector: 'app-visa-prise',
  standalone: true,
  imports: [],
  templateUrl: './visa-prise.component.html',
  styleUrl: './visa-prise.component.scss'
})
export class VisaPriseComponent {
  item = input.required<VisaPrise>();
}
