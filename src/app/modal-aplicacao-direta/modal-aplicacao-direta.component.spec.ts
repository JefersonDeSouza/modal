import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAplicacaoDiretaComponent } from './modal-aplicacao-direta.component';

describe('ModalAplicacaoDiretaComponent', () => {
  let component: ModalAplicacaoDiretaComponent;
  let fixture: ComponentFixture<ModalAplicacaoDiretaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAplicacaoDiretaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAplicacaoDiretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
