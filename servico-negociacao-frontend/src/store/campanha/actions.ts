import { ActionTree } from 'vuex';
import { CampanhaState } from './state';
import { CampanhaService } from '@/services/CampanhaService';
import { CampanhaMutationTypes } from './mutations';
import { RootState } from '@/store';

export enum CampanhaActionTypes {
  CARREGAR_CAMPANHAS = 'CARREGAR_CAMPANHAS',
  SET_CAMPANHA_SELECIONADA = 'SET_CAMPANHA_SELECIONADA',
}

const actions: ActionTree<CampanhaState, RootState> = {
  async [CampanhaActionTypes.CARREGAR_CAMPANHAS]({commit}) {
    const listaDeCampanhas = await new CampanhaService().obterCampanha();
    commit(CampanhaMutationTypes.SET_CAMPANHAS, listaDeCampanhas);
  },
  async [CampanhaActionTypes.SET_CAMPANHA_SELECIONADA]({commit}, campanhaSelecionada) {
    commit(CampanhaMutationTypes.SET_CAMPANHA_SELECIONADA, campanhaSelecionada);
  },
  
};

export default actions;
