import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LitigationPage } from './litigation.page';

describe('LitigationPage', () => {
  let component: LitigationPage;
  let fixture: ComponentFixture<LitigationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LitigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
