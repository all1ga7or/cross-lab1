import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { LabHatComponent } from '../lab-hat/lab-hat.component';

@Component({
  selector: 'app-lab8-9',
  templateUrl: './lab8-9.page.html',
  styleUrls: ['./lab8-9.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, DynamicFormComponent, LabHatComponent, IonCard, IonCardHeader, IonCardContent, IonCardTitle]
})
export class Lab89Page implements OnInit {
  groups: any[] = [];
  selectedGroup: any = null;

  constructor() {
    this.loadGroups();
  }

  ngOnInit() {}

  addGroup(group: any): void {
    this.groups.push(group);
    this.saveGroups();
  }

  selectGroup(group: any): void {
    this.selectedGroup = this.selectedGroup === group ? null : group;
  }

  addStudent(student: any): void {
    if (this.selectedGroup) {
      this.selectedGroup.students.push(student);
      this.selectedGroup.numberOfStudents += 1;
      this.saveGroups();
    }
  }

  removeStudent(event: any): void {
    const { group, student } = event;
    const index = group.students.findIndex((s: any) => s.studentName === student.studentName && s.studentAge === student.studentAge);
    if (index > -1) {
      group.students.splice(index, 1);
      group.numberOfStudents -= 1;
      this.saveGroups();
    }
  }

  private saveGroups(): void {
    localStorage.setItem('groups', JSON.stringify(this.groups));
  }

  private loadGroups(): void {
    const savedGroups = localStorage.getItem('groups');
    if (savedGroups) {
      this.groups = JSON.parse(savedGroups);
    } else {
      this.groups = [
        {
          groupName: 'Group 1',
          course: 4,
          leader: 'Іванов Іван',
          numberOfStudents: 5,
          students: [
            { studentName: 'Іванов Іван', studentAge: 22 },
            { studentName: 'Петрова Марія', studentAge: 20 },
            { studentName: 'Сидоренко Олександр', studentAge: 23 },
            { studentName: 'Ковальчук Олена', studentAge: 21 },
            { studentName: 'Михайленко Володимир', studentAge: 24 }
          ]
        }
      ];
      this.saveGroups();
    }
  }
}
