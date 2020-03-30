import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoModalAplicacaoDiretaComponent } from './botao-modal-aplicacao-direta.component';

describe('BotaoModalAplicacaoDiretaComponent', () => {
  let component: BotaoModalAplicacaoDiretaComponent;
  let fixture: ComponentFixture<BotaoModalAplicacaoDiretaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoModalAplicacaoDiretaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoModalAplicacaoDiretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
