import { TestBed } from '@angular/core/testing';
import { GroupValidatorService } from './group-validator.service';
import { FormControl } from '@angular/forms';

describe('GroupValidatorService', () => {
  let service: GroupValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate group name', () => {
    let control = new FormControl('adminGroup');
    expect(service.validateGroupName(control)).toEqual({ forbiddenName: { value: 'adminGroup' } });

    control = new FormControl('validGroup');
    expect(service.validateGroupName(control)).toBeNull();
  });
});
