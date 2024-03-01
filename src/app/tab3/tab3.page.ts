import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel, IonRow, IonCol, IonText, IonGrid} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel, IonRow, IonCol, IonText, IonGrid],
})
export class Tab3Page {
  constructor() {}
  matrixSize!: number;
  matrix!: number[][];
  rowSum!: number[];
  matrixGenerated: boolean = false;
  generateRange(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index + 1);
  }
  generateMatrix() {
    this.matrix = [];
    this.rowSum = [];
    if (!this.matrixSize || this.matrixSize <= 0) {
      throw new Error('Invalid input');
    }
    for (let i = 0; i < this.matrixSize; i++) {
      const row = [];
      let sum = 0;

      for (let j = 0; j < this.matrixSize; j++) {
        const num = Math.floor(Math.random() * 100);
        row.push(num);
        sum += num;
      }
      row.push(sum);
      this.matrix.push(row);
      this.rowSum.push(sum);
    }
    this.matrixGenerated = true;
  }

  // Function to determine the background color based on the sum
  getRowColor(sum: number): string {
    if (sum >= 0 && sum <= this.matrixSize * 50) {
      return 'green';
    } else if (sum > this.matrixSize * 50 && sum <= this.matrixSize * 75) {
      return 'yellow';
    } else if (sum > this.matrixSize * 75 && sum <= this.matrixSize * 100) {
      return 'red';
    } else {
      return '';
    }
  }
}
