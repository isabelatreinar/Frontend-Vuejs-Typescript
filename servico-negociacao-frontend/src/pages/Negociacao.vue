<template>
  <v-container v-if="debitos && debitos.length > 0">
    <v-layout row wrap>
      <v-flex xs12>
        <dados-aluno></dados-aluno>
      </v-flex>
    </v-layout>
    <v-layout class="pt-3" row wrap>
      <v-flex xs8>
        <debitos></debitos>
        <campanha></campanha>
        <v-divider></v-divider>
      </v-flex>
      <v-flex class="pl-3" xs4>
        <simulacao-acordo></simulacao-acordo>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';
import DadosAluno from '@/components/negociacao/dadosAluno.vue';
import Debitos from '@/components/negociacao/debitos.vue';
import Campanha from '@/components/negociacao/campanha.vue';
import SimulacaoAcordo from '@/components/negociacao/simulacaoAcordo.vue';
import { StoreNamespaces } from '@/store/namespaces';
import { namespace } from 'vuex-class';
import { DebitoGetterTypes } from '@/store/debito/getters';
import { Debito } from '@/model/Debito';

const debitoNamespace = namespace(StoreNamespaces.DEBITO);

@Component({
  components: {
    DadosAluno,
    Debitos,
    SimulacaoAcordo,
    Campanha,
  },
})
export default class Negociacao extends Vue {
  @debitoNamespace.Getter(DebitoGetterTypes.DEBITOS_ALUNO)
  public debitos?: Debito[];
}
</script>