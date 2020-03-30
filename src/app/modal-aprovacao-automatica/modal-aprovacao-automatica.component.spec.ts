import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAprovacaoAutomaticaComponent } from './modal-aprovacao-automatica.component';

describe('ModalAprovacaoAutomaticaComponent', () => {
  let component: ModalAprovacaoAutomaticaComponent;
  let fixture: ComponentFixture<ModalAprovacaoAutomaticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAprovacaoAutomaticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAprovacaoAutomaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
