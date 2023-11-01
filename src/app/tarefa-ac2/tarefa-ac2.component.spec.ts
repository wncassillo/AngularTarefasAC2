import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaAC2Component } from './tarefa-ac2.component';

describe('TarefaAC2Component', () => {
  let component: TarefaAC2Component;
  let fixture: ComponentFixture<TarefaAC2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarefaAC2Component]
    });
    fixture = TestBed.createComponent(TarefaAC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
