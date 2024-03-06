import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel, LoadingController, IonSelect, IonSelectOption} from '@ionic/angular/standalone';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.page.html',
  styleUrls: ['./lab3.page.scss'],
  standalone: true,
  imports: [FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel, IonSelect, IonSelectOption]
})
export class Lab3Page implements OnInit {
  faculties: any[] = [];
  selectedFaculty: string | null = null;
  selectedFacultyDetails: any = null;
  showInfo: boolean = false;
  showDetails: boolean = false;
  apiUrl = "https://api.jsonbin.io/v3/qs/65e87e93266cfc3fde944182";

  constructor() { 
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch(this.apiUrl);
      if (response.ok) {
        const data = await response.json();
        this.faculties = data.record;
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  findFacultyInfo() {
    this.selectedFacultyDetails = this.faculties.find(faculty => faculty.name === this.selectedFaculty);
  }
  showFacultyName() {
    this.showInfo = true;
  }
  hideFacultyInfo(){
    this.showInfo = false;
    this.showDetails = false;
  }
  changeFacultyDetailsStatus(){
    this.showDetails = !this.showDetails;
  }
  ngOnInit() {
  }

}
