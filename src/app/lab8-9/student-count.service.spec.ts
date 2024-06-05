import { TestBed } from '@angular/core/testing';

import { StudentCountService } from './student-count.service';

describe('StudentCountService', () => {
  let service: StudentCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
