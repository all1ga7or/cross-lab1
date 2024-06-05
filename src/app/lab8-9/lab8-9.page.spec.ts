import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lab89Page } from './lab8-9.page';

describe('Lab89Page', () => {
  let component: Lab89Page;
  let fixture: ComponentFixture<Lab89Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab89Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
