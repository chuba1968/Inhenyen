import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorporatePage } from './corporate.page';

describe('CorporatePage', () => {
  let component: CorporatePage;
  let fixture: ComponentFixture<CorporatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
