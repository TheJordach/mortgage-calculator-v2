import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplayResultComponent } from './diplay-result.component';

describe('DiplayResultComponent', () => {
  let component: DiplayResultComponent;
  let fixture: ComponentFixture<DiplayResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiplayResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiplayResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
