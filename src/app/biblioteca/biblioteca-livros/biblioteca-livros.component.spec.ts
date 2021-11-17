import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaLivrosComponent } from './biblioteca-livros.component';

describe('BibliotecaLivrosComponent', () => {
  let component: BibliotecaLivrosComponent;
  let fixture: ComponentFixture<BibliotecaLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaLivrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
