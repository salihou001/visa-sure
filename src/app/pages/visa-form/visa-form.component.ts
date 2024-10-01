import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-visa-form',
  standalone: true,
  imports: [FooterComponent, NavBarComponent],
  templateUrl: './visa-form.component.html',
  styleUrl: './visa-form.component.scss'
})
export class VisaFormComponent {

}
