import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumListaComponent } from './forum-lista.component';

describe('ForumListaComponent', () => {
  let component: ForumListaComponent;
  let fixture: ComponentFixture<ForumListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
