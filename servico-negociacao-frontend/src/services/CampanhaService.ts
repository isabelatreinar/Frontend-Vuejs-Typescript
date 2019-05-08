
import { HttpService } from 'componente-frontend-core/services/HttpService';
import { Campanha } from '@/model/Campanha';

export class CampanhaService {

  public async obterCampanha(): Promise<Campanha[]> {
    const resposta = await new HttpService()
      .get<Campanha[]>(`http://localhost:54887/api/ObterCampanhas`);

    return resposta.data!;
  }
}
