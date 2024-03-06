import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel} from '@ionic/angular/standalone';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel]
})
export class GraphPage implements OnInit {
  startX: number = -2.25;
  endX: number = 34.9;
  step: number = 0.5;
  a!:number;
  @ViewChild('lineChart') lineChart!: ElementRef;
  chart: any;
  constructor() {
  }
  
  generateChart(a_value:any) {
    this.a = a_value;
    const labels = [];
    const datasetData = [];

    for (let x = this.startX; x <= this.endX; x += this.step) {
      labels.push(x);

      let fx = this.f1(x);
      if (x > 0 && x < this.a) {
        fx = this.f2(x);
      } else if (x > this.a) {
        fx = this.f3(x);
      }
      datasetData.push(fx);
    }


    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = this.lineChart.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'f(x)',
            data: datasetData,
            borderColor: '#428CFF',
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
          y: {
            min: Math.min(...datasetData),
            max: Math.max(...datasetData),
          },
        },
      },
    });
  }

  f1(x: number): number {
    return Math.cos(Math.pow(x,3)-4*x+4)/(Math.pow(x,3)-Math.log(Math.abs(x)+1));
  }

  f2(x: number): number {
    return Math.sin(Math.pow(x+2,2))/Math.pow(2*Math.pow(x,2)+Math.pow(x,4)+1,1/3);
  }

  f3(x: number): number {
    return (Math.sqrt(Math.pow(Math.abs(x),3))*Math.sin(Math.pow(x,3)))/Math.pow(Math.cos(x+1),2);
  }
  ngOnInit() {
  }

}
