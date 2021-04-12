import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeduaComponent } from './kedua.component';

describe('KeduaComponent', () => {
  let component: KeduaComponent;
  let fixture: ComponentFixture<KeduaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeduaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeduaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
