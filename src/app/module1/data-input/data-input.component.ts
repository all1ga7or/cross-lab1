import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import { CalculationData } from './calculation-data';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel } from '@ionic/angular/standalone';
@Component({
  standalone: true,
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.scss'],
  imports: [FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonInput, IonList, IonItem, IonButtons, IonButton, IonMenuButton, IonLabel, ReactiveFormsModule],
})
export class DataInputComponent {
  @Output() calculate = new EventEmitter<CalculationData>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      numOfCoefs: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      xValue: ['', Validators.required],
      coefs: this.formBuilder.array([])
    });
  }

  createFields() {
    const numOfCoefs = this.form.get('numOfCoefs')?.value;
    const coefsArray = this.form.get('coefs') as FormArray; 
    coefsArray.clear();
  
    for (let i = 0; i < numOfCoefs; i++) {
      coefsArray.push(this.formBuilder.control('', Validators.required));
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.calculate.emit({
        coefs: this.form.get('coefs')!.value,
        xValue: this.form.get('xValue')!.value,
      });
    }
  }
  
}
