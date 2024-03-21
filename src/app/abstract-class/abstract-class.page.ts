import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel} from '@ionic/angular/standalone';
import { Factory } from './Class/factory';
import { Building } from './Class/building';
import { Office } from './Class/office';
import { House } from './Class/house';
@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel]
})
export class AbstractClassPage implements OnInit {
  building: Building[] = [];
  constructor() { }
  exec(n: any): void{
    this.building = new Array();
    let N = parseInt(n);
    for (let i=0;i<N;i++){
      const rnd = Math.floor(Math.random() * 20);
      this.building.push(new Office('Office' + String(i+1), NaN, rnd));
      this.building.push(new Factory('Factory' + String(i+1), NaN, rnd*2));
      this.building.push(new House('House' + String(i+1), NaN, rnd*3));
    }
    let maxFoundationHeight = 0;
    this.building.forEach((element) => {
      element.foundationHeight();
      console.log(element.show());
      if (element.height && element.height > maxFoundationHeight) {
        maxFoundationHeight = element.height;
      }
    });
    alert("Максимальна висота фундаментів:" + maxFoundationHeight + " meters.");
    console.log('Максимальна висота фундаментів: ' + maxFoundationHeight);
  }
  
  ngOnInit() {
  }

}
