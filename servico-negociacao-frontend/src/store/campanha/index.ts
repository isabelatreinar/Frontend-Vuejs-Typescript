import { Module } from 'vuex';
import { CampanhaState, state } from './state';
import { RootState } from '@/store';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const campanha: Module<CampanhaState, RootState> = {
  actions,
  state,
  mutations,
  getters,
  namespaced: true,
};

export default campanha;
