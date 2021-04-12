import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PertamaSimpelComponent } from './pertama-simpel.component';

describe('PertamaSimpelComponent', () => {
  let component: PertamaSimpelComponent;
  let fixture: ComponentFixture<PertamaSimpelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PertamaSimpelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PertamaSimpelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
