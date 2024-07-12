import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlokPierwszyComponent } from './blok-pierwszy.component';

describe('BlokPierwszyComponent', () => {
  let component: BlokPierwszyComponent;
  let fixture: ComponentFixture<BlokPierwszyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlokPierwszyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlokPierwszyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
