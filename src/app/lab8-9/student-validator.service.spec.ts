import { TestBed } from '@angular/core/testing';
import { StudentValidatorService } from './student-validator.service';
import { FormControl } from '@angular/forms';

describe('StudentValidatorService', () => {
  let service: StudentValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate student age', () => {
    let control = new FormControl(15);
    expect(service.validateStudentAge(control)).toEqual({ tooYoung: { value: 15 } });

    control = new FormControl(18);
    expect(service.validateStudentAge(control)).toBeNull();
  });
});
