import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel, ExploreContainerComponent],
})
export class Tab1Page {
  num1!: number;
  num2!: number;
  num3!: number;
  result: number = NaN;
  constructor() {}
  countMultiples(num1:any, num2:any, num3:any) {
    try{
      this.num1=parseFloat(num1);
      this.num2=parseFloat(num2);
      this.num3=parseFloat(num3);
      if (isNaN(this.num1) || isNaN(this.num2) || isNaN(this.num3)) throw new Error('Invalid input');
      const numbers = [this.num1, this.num2, this.num3];
      this.result = numbers.filter(num => num % 27 === 0).length;
    }
    catch{
      alert("Please enter valid integers");
    }
    
  }

}
