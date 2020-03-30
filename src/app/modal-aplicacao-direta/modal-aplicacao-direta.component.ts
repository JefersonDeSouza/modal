import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { AprovacaoAutomatica } from 'src/models/aprovacaoAutomatica';
import { TipoAprovacaoAutomatica } from 'src/models/tipoAprovacaoAutomaticaEnum';

@Component({
  selector: 'app-modal-aplicacao-direta',
  templateUrl: './modal-aplicacao-direta.component.html',
  styleUrls: ['./modal-aplicacao-direta.component.sass']
})
export class ModalAplicacaoDiretaComponent implements OnInit {
  formAprovacaoAutomatica: FormGroup;
  @Input() name;
  nome = new FormControl('');

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.criarFormulario(new AprovacaoAutomatica());
  }

  criarFormulario(aprovacaoAutomatica: AprovacaoAutomatica) {
    this.formAprovacaoAutomatica = this.formBuilder.group({
      tipoAprovacao: ['', Validators.required],
      email: [aprovacaoAutomatica.email],
      dataContato: [aprovacaoAutomatica.dataContato],
      ramalGravado: [aprovacaoAutomatica.ramalGravado],
      horarioLigacao: [aprovacaoAutomatica.horarioLigacao]
    });

    this.formAprovacaoAutomatica.controls[
      'tipoAprovacao'
    ].valueChanges.subscribe(result => {
      if (result === TipoAprovacaoAutomatica.telefone) {
        this.adicionarValidacaoTipoAprovacaoTelefone();
        this.removerValidacaoTipoAprovacaoEmail();
      } else if (result === TipoAprovacaoAutomatica.email) {
        this.adicionarValidacaoTipoAprovacaoEmail();
        this.removerValidacaoTipoAprovacaoTelefone();
      }
    });
  }

  private adicionarValidacaoTipoAprovacaoTelefone() {
    this.formAprovacaoAutomatica.controls['ramalGravado'].setValidators(
      Validators.required
    );
    this.formAprovacaoAutomatica.controls[
      'ramalGravado'
    ].updateValueAndValidity();
    this.formAprovacaoAutomatica.controls['horarioLigacao'].setValidators(
      Validators.required
    );
    this.formAprovacaoAutomatica.controls[
      'horarioLigacao'
    ].updateValueAndValidity();
  }

  private removerValidacaoTipoAprovacaoTelefone() {
    this.formAprovacaoAutomatica.controls['ramalGravado'].setValidators(null);
    this.formAprovacaoAutomatica.controls[
      'ramalGravado'
    ].updateValueAndValidity();
    this.formAprovacaoAutomatica.controls['horarioLigacao'].setValidators(null);
    this.formAprovacaoAutomatica.controls[
      'horarioLigacao'
    ].updateValueAndValidity();
  }

  private adicionarValidacaoTipoAprovacaoEmail() {
    this.formAprovacaoAutomatica.controls['email'].setValidators([
      Validators.required,
      Validators.email
    ]);
    this.formAprovacaoAutomatica.controls['email'].updateValueAndValidity();
    this.formAprovacaoAutomatica.controls['dataContato'].setValidators(
      Validators.required
    );
    this.formAprovacaoAutomatica.controls[
      'dataContato'
    ].updateValueAndValidity();
  }

  private removerValidacaoTipoAprovacaoEmail() {
    this.formAprovacaoAutomatica.controls['email'].setValidators(null);
    this.formAprovacaoAutomatica.controls['email'].updateValueAndValidity();
    this.formAprovacaoAutomatica.controls['dataContato'].setValidators(null);
    this.formAprovacaoAutomatica.controls[
      'dataContato'
    ].updateValueAndValidity();
  }

  confirm(): void {
    this.activeModal.close();
  }

  decline(): void {
    this.activeModal.close();
  }

  onSubmit() {
    // TODO: Use EventEmmiter com o valor do formulário
    console.warn(this.formAprovacaoAutomatica.value);
  }
}
