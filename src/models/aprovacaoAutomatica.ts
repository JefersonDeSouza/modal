import { TipoAprovacaoAutomatica } from './tipoAprovacaoAutomaticaEnum';

export class AprovacaoAutomatica {
  tipoAprovacao: TipoAprovacaoAutomatica = TipoAprovacaoAutomatica.telefone;
  email: string = '';
  dataContato: string = '';
  ramalGravado: string = '';
  horarioLigacao: string = '';
}
