import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalAprovacaoAutomaticaComponent } from './modal-aprovacao-automatica/modal-aprovacao-automatica.component';
import { ModalAplicacaoDiretaComponent } from './modal-aplicacao-direta/modal-aplicacao-direta.component';
import { BotaoModalAplicacaoDiretaComponent } from './modal-aplicacao-direta/botao-modal-aplicacao-direta/botao-modal-aplicacao-direta.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalContentComponent,
    ModalAprovacaoAutomaticaComponent,
    ModalAplicacaoDiretaComponent,
    BotaoModalAplicacaoDiretaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalContentComponent]
})
export class AppModule { }
