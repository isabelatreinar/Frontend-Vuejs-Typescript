import { HttpService } from 'componente-frontend-core/services/HttpService';
import { ObterDebitosDoAluno } from '@/model/ObterDebitosDoAluno';

export class DebitoService {

  public async obterDebitosDoAluno(cpf: string): Promise<ObterDebitosDoAluno> {
    const resposta = await new HttpService()
      .get<ObterDebitosDoAluno>(`http://localhost:54887/api/ObterDebitosDoAluno/${cpf}`);
    return resposta.data!;
  }
}
