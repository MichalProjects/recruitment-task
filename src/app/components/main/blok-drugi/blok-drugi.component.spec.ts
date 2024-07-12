import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlokDrugiComponent } from './blok-drugi.component';

describe('BlokDrugiComponent', () => {
  let component: BlokDrugiComponent;
  let fixture: ComponentFixture<BlokDrugiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlokDrugiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlokDrugiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
