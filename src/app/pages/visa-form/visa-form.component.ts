import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { VisaPrise } from '../../shared/models/visa-prise.model';
import { VisaPriseComponent } from "../../shared/components/visa-prise/visa-prise.component";

@Component({
  selector: 'app-visa-form',
  standalone: true,
  imports: [FooterComponent, NavBarComponent, VisaPriseComponent],
  templateUrl: './visa-form.component.html',
  styleUrl: './visa-form.component.scss'
})
export class VisaFormComponent {
  listVisa: VisaPrise[] = [
    {
      id: 1,
      label: 'E-visa de Court sejour', 
      price: '233 €', 
      desc: 'Séjour maximun de 180 joursDurée de validité de 6 moisMultiple entrée'
    },
    {
      id: 2,
      label: 'E-visa  Express', 
      price: '345 €', 
      desc: 'Séjour maximun de 180 joursDurée de validité de 6 moisMultiple entrée'
    },
    {
      id: 3,
      label: 'E-visa de  long sejour', 
      price: '406 €', 
      desc: 'Séjour maximun de 180 joursDurée de validité de 6 moisMultiple entrée'
    },
  ]
}
