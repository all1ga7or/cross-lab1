import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GroupValidatorService {
  validateGroupName(control: AbstractControl): ValidationErrors | null {
    const forbidden = /admin/.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  }
}
