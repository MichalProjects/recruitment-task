import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlokTrzeciComponent } from './blok-trzeci.component';

describe('BlokTrzeciComponent', () => {
  let component: BlokTrzeciComponent;
  let fixture: ComponentFixture<BlokTrzeciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlokTrzeciComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlokTrzeciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
