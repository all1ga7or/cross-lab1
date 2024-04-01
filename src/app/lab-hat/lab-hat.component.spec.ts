import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LabHatComponent } from './lab-hat.component';

describe('LabHatComponent', () => {
  let component: LabHatComponent;
  let fixture: ComponentFixture<LabHatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LabHatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LabHatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
