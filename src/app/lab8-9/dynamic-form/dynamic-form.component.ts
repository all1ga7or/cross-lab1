import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonMenuButton, IonLabel, IonItem, IonInput, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
import { StudentCountService } from '../student-count.service';
import { Group } from './group';
import { Student } from './student';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  standalone: true,
  imports: [FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, ReactiveFormsModule, IonButtons, IonButton, IonMenuButton, IonLabel, IonItem, IonInput, IonSegment, IonSegmentButton]
})
export class DynamicFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<any>();
  @Output() addStudentEvent = new EventEmitter<any>();
  @Output() removeStudentEvent = new EventEmitter<any>();

  groupForm: FormGroup;
  editGroupForm: FormGroup;
  newStudentForm: FormGroup;
  showNewStudentForm: boolean = false;
  showStudentList: boolean = false;
  selectedGroup: Group | null = null;
  action: string = 'createGroup';
  groups: Group[] = [];

  constructor(private fb: FormBuilder) {
    this.groupForm = this.fb.group({
      groupName: ['', Validators.required],
      course: ['', [Validators.required, Validators.min(1), Validators.max(6)]],
      leader: ['', Validators.required],
      numberOfStudents: ['', [Validators.required, Validators.min(1)]],
      students: this.fb.array([])
    }, { validators: StudentCountService.validateStudentCount() });

    this.editGroupForm = this.fb.group({
      groupName: ['', Validators.required]
    });

    this.newStudentForm = this.fb.group({
      studentName: ['', Validators.required],
      studentAge: ['', [Validators.required, Validators.min(16)]]
    });

    this.loadGroups();
  }

  ngOnInit(): void {}

  get students(): FormArray {
    return this.groupForm.get('students') as FormArray;
  }

  addStudent(): void {
    const studentGroup = this.fb.group({
      studentName: ['', Validators.required],
      studentAge: ['', [Validators.required, Validators.min(16)]]
    });
    this.students.push(studentGroup);
  }

  removeStudent(index: number): void {
    if (this.selectedGroup) {
      const removedStudent = this.selectedGroup.students[index];
      this.selectedGroup.students.splice(index, 1);
      this.selectedGroup.numberOfStudents -= 1;
      this.removeStudentEvent.emit({ group: this.selectedGroup, student: removedStudent });
      this.saveGroups();
    }
  }

  onSubmit(): void {
    if (this.groupForm.valid) {
      const newGroup: Group = this.groupForm.value;
      this.groups.push(newGroup);
      this.saveGroups();
      this.formSubmit.emit(newGroup);
      this.groupForm.reset();
      this.students.clear();
    } else {
      console.error('Form is invalid');
    }
  }

  showGroup(): void {
    const groupName = this.editGroupForm.get('groupName')?.value;
    this.selectedGroup = this.groups.find(group => group.groupName === groupName) || null;
    if (this.selectedGroup) {
      this.showStudentList = true;
      this.showNewStudentForm = false;
    } else {
      this.showStudentList = false;
      alert('Group not found');
    }
  }

  excludeStudent(index: number): void {
    if (this.selectedGroup) {
      this.removeStudent(index);
    }
  }

  showAddStudentForm(): void {
    this.showNewStudentForm = true;
  }

  submitNewStudent(): void {
    if (this.newStudentForm.valid && this.selectedGroup) {
      const newStudent: Student = this.newStudentForm.value;
      this.selectedGroup.students.push(newStudent);
      this.selectedGroup.numberOfStudents += 1;
      this.newStudentForm.reset();
      this.showNewStudentForm = false;
      this.addStudentEvent.emit(newStudent);
      this.saveGroups();
    } else {
      console.error('New student form is invalid or no group selected');
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
