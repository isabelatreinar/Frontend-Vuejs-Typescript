
<template>    
    <div>
        <v-card v-for="campanha in campanhas" :key="campanha.id"
            class="Clicavel"
            @click.native="selecionarCampanha(campanha)">
           {{campanha.descricao}}
        </v-card>
    </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch,
} from 'vue-property-decorator';


import {StoreNamespaces} from '@/store/namespaces'
import {CampanhaActionTypes} from '@/store/campanha/actions'
import {CampanhaGetterTypes} from '@/store/campanha/getters' 
import {namespace} from 'vuex-class'
import {Campanha} from '@/model/Campanha'

const campanhaNamespace = namespace(StoreNamespaces.CAMPANHA);

@Component({
    components:{

    },
})
export default class Campanhas extends Vue{
    @campanhaNamespace.Action(CampanhaActionTypes.CARREGAR_CAMPANHAS)
    public carregarCampanhas!: () => Promise<void>;

    @campanhaNamespace.Action(CampanhaActionTypes.SET_CAMPANHA_SELECIONADA)
    public carregarCampanhaSelecionada!: (campanha: Campanha) => Promise<void>;

    @campanhaNamespace.Getter(CampanhaGetterTypes.CAMPANHAS)
    public campanhas!: Campanha[];

    public mounted(){
        this.carregarCampanhas();
    }

    public selecionarCampanha(campanha: Campanha){
        this.carregarCampanhaSelecionada(campanha);
    }
}


</script>

<style>
    .Clicavel{
        cursor: pointer;
    }
</style>
