import { Campanha } from '../../model/Campanha';

export class CampanhaState {
  public campanhas?: Campanha[];
  public campanhaSelecionada?: Campanha;
}

export const state: CampanhaState = Object.assign(new CampanhaState(), {
  campanhas: [] as Campanha[],
  campanhaSelecionada: {} as Campanha,
  
});

