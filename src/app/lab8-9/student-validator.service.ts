import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentValidatorService {
  validateStudentAge(control: AbstractControl): ValidationErrors | null {
    const minAge = 16;
    return control.value < minAge ? { tooYoung: { value: control.value } } : null;
  }
}
