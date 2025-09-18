<template>
  <v-container fluid class="pa-0  ma-0 fill-height">
    <v-card flat tile class="pa-6 ma-0 fill-height larguratoda" >
        <v-row>
            <v-col>
                <h1>Relatório de coleta</h1>
                <p>Aqui você pode visualizar informações relacionadas a atendimentos das filas coletas.</p>
            </v-col>
        </v-row>
        <v-divider></v-divider>
    
        <h2>Selecionar perídodo de tempo</h2>
        <v-row>
            <v-col cols="" md="">
                <v-btn-toggle
                v-model="selecionado"
                divided
                mandatory
                color="primary"
                >
                
                <v-btn value="dia">Por dia</v-btn>
                <v-btn value="periodo">Por período de tempo</v-btn>
            </v-btn-toggle>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="2">
                <h3>Data do relatório:</h3>
            </v-col>
            <v-col col="12" md="4">
                <v-text-field type="date"></v-text-field>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-end">
            <v-btn color="success">Fazer a consulta</v-btn>
        </v-row>
        <FormColeta v-model="openForm"
        :fila="filaSelecionada"
        @salvar="salvarFila"/>
    </v-card>
  </v-container>
</template>
<script setup>
import { ref } from 'vue'
import FormColeta from '../components/Forms/FormColeta.vue'

const selecionado = ref('dia')
const filaSelecionada = ref(null)
const openForm = ref(false) 


const form = ref({
    nome: "",
    descricao: "",
    totem: "Nenhum",
    grupo: "Nenhum",
    tv: "Selecione as TVs",
    unidade: "",
    sigla: "",
    inicio: "",
    fim: "",
    acompanhante: "Não",
    tempoEspera: "",
    tempoAtendimento: "",
    alerta: "Não",
    qrcode: false,
    dias: []
})

const filas = ref([
  { coleta: "Coleta Teste 1", descricao: "Normal", usuario: "chambelo.net", posto: "posto de coleta teste", status: "", editar: "" }
]);


function toggleStatus(item){
    item.status = !item.status
}

function abrirForm(fila = null) {
    filaSelecionada.value = fila ? {...fila} : null
    openForm.value = true
}

function salvarFila(fila) {
  if (filaSelecionada.value) {
    const index = filas.value.findIndex(f => f.nome === filaSelecionada.value.nome)
    filas.value[index] = { ...fila }
  } else {
    filas.value.push({ ...fila })
  }
  openForm.value = false
}

</script>
<style scoped>
.v-checkbox {
    color: black;
}

.larguratoda {
    width: 100% !important;
}

.fill-height {
    height: 100%;
}
</style>
