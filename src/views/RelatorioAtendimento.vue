<template>
  <v-container fluid class="pa-0  ma-0 fill-height">
    <v-card flat tile class="pa-6 ma-0 fill-height larguratoda" >
        <v-row>
            <v-col>
                <h1>Relatório de Atendimento</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="4">
                <v-text-field type="date" label="Data Início"></v-text-field>
            </v-col>
             <v-col cols="12" md="4">
                <v-text-field type="date" label="Data final"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
                <v-select label="Unidade"></v-select>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-end">
            <v-btn color="success">Enviar</v-btn>
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

const filaSelecionada = ref(null)
const openForm = ref(false) 
const valid = ref(false)

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
