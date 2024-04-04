import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel, LoadingController, IonSelect, IonSelectOption} from '@ionic/angular/standalone';
import { CalculatePolyService } from './calculate-poly.service';
import { CalculationData } from './data-input/calculation-data';
import { DataInputComponent } from './data-input/data-input.component';
@Component({
  selector: 'app-module1',
  templateUrl: './module1.page.html',
  styleUrls: ['./module1.page.scss'],
  standalone: true,
  imports: [FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel, IonSelect, IonSelectOption, DataInputComponent]
})
export class Module1Page implements OnInit {
  result!: number;
  
  constructor(private CalculatePolyService: CalculatePolyService) {}

  ngOnInit() {
  }
  calculatePolyResult(data: CalculationData) {
    const { coefs, xValue } = data;
    this.result = this.CalculatePolyService.calculatePoly(coefs, xValue);
  }
  
}
