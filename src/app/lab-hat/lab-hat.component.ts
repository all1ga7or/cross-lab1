import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonMenuButton, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lab-hat',
  templateUrl: './lab-hat.component.html',
  styleUrls: ['./lab-hat.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonMenuButton, IonLabel]
})
export class LabHatComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  @Input() num: string = 'NaN';

}
