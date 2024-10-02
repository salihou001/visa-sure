import { Injectable } from '@angular/core';
import { VisaPrise } from '../models/visa-prise.model';

@Injectable({
  providedIn: 'root'
})
export class VisaServicePlanService {
  currentPlan!: VisaPrise;
}
