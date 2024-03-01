import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel} from '@ionic/angular/standalone';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel],
})
export class Tab2Page {

  constructor() {}
  a!: number;
  b!: number;
  result!: number;

  calculateSum(a:any, b:any) {
    try{
      this.a=parseInt(a);
      this.b=parseInt(b);
      if (isNaN(this.a) || isNaN(this.b)) throw new Error('Invalid input');
      let sum = 0;
      for (let i = this.a; i <= this.b; i++) {
        if (i % 17 === 0 && i % 4 === 2) {
          sum += i;
        }
      }
      this.result = sum;
    }
    catch{
      alert("Please enter valid integers");
    }
  }
}
