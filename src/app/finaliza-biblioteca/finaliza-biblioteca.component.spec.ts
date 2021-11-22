import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizaBibliotecaComponent } from './finaliza-biblioteca.component';

describe('FinalizaBibliotecaComponent', () => {
  let component: FinalizaBibliotecaComponent;
  let fixture: ComponentFixture<FinalizaBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizaBibliotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizaBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
