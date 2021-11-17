import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioDevolucaoComponent } from './calendario-devolucao.component';

describe('CalendarioDevolucaoComponent', () => {
  let component: CalendarioDevolucaoComponent;
  let fixture: ComponentFixture<CalendarioDevolucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioDevolucaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioDevolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
