import { Component, inject, signal } from '@angular/core';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { VisaPrise } from '../../shared/models/visa-prise.model';
import { VisaPriseComponent } from "../../shared/components/visa-prise/visa-prise.component";
import gsap from 'gsap';
import { VisaServicePlanService } from '../../shared/services/visa-service-plan.service';

@Component({
  selector: 'app-visa-form',
  standalone: true,
  imports: [FooterComponent, NavBarComponent, VisaPriseComponent],
  templateUrl: './visa-form.component.html',
  styleUrl: './visa-form.component.scss'
})
export class VisaFormComponent {
  uploadedFiles: Array<{ name: string }> = [];

  listVisa: VisaPrise[] = [
    {
      id: 1,
      label: 'E-visa de Court sejour',
      price: '233 €',
      desc: 'Séjour allant de 1 a  180 jours Multiple entrée (obtenue en 4 jours ovrable)'
    },
    {
      id: 2,
      label: 'E-visa  Court sejour Express ',
      price: '345 €',
      desc: 'obtenez votre visa en 48 heures Multiple entrée (obtenue en 2 jours ovrable)'
    },
    {
      id: 3,
      label: 'E-visa de  long sejour',
      price: '406 €',
      desc: 'Séjour de 180 jours a 360 jours Multiple entrée (obtenue en 4 jours ovrable)'
    },
  ]
  compteur = signal(1)
  compteurRadio = signal(1)

  visaPlan = inject(VisaServicePlanService);

  nextStep() {
    gsap.to(".row-form", {
      xPercent: -100,
      duration: .5,
    })
    this.compteur.set(2)
  }
  prevStep() {
    gsap.to(".row-form", {
      xPercent: 0,
      duration: .5,
    })
    this.compteur.set(1);
  }



  checkIfUserIsMinor(e: any) {
    if(this.compteurRadio() === 1){
      this.compteurRadio.set(2);
    }else{
      e.target.checked = false;
      this.compteurRadio.set(1);
    }
  }
}
