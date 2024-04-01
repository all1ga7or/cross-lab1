import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel} from '@ionic/angular/standalone';
import { LabHatComponent } from '../lab-hat/lab-hat.component';
import { Node } from './class/node';
import { Mechanism } from './class/mechanism';
@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.page.html',
  styleUrls: ['./lab6.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel, LabHatComponent]
})
export class Lab6Page implements OnInit {
  mechanismInfo: string = '';
  nodeInfo: string = '';
  instancesCreated: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  createInstances() {
    const node = new Node(10, 'plastic', 50);
    const mechanism = new Mechanism(20, 'steel', 100);

    this.nodeInfo = `Node: weight=${node.weight}, material=${node.material}, cost=${node.cost}`;
    this.mechanismInfo = `Mechanism: weight=${mechanism.weight}, material=${mechanism.material}, cost=${mechanism.cost}`;
    this.instancesCreated = true;
  }

}
