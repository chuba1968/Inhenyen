import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartCasePage } from './start-case.page';

describe('StartCasePage', () => {
  let component: StartCasePage;
  let fixture: ComponentFixture<StartCasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
