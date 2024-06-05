import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentCountService {

  static validateStudentCount(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const numberOfStudents = control.get('numberOfStudents')?.value;
      const students = control.get('students') as any;
      
      if (students && students.length !== numberOfStudents) {
        return { studentCountMismatch: true };
      }
      return null;
    };
  }
}
