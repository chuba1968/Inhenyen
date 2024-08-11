import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WillsPage } from './wills.page';

describe('WillsPage', () => {
  let component: WillsPage;
  let fixture: ComponentFixture<WillsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
