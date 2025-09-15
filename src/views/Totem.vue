<template>
  <v-container fluid class="pa-0  ma-0 fill-height">
    <v-card flat tile class="pa-6 ma-0 fill-height larguratoda" >
        <v-row>
            <v-col>
                <h1>Totens</h1>
            </v-col>
            <v-col class="d-flex justify-end">
                <v-btn
                    color="primary"
                    variant="flat"
                    @click="abrirForm()"
                    >Cadastrar Totem</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="10">
                <v-text-field label="Pesquisar"></v-text-field>
            </v-col>
            <v-col class="d-flex pl-auto justify-end">
                <v-btn color="primary">Listar por </v-btn>
            </v-col>
        </v-row>
        <v-data-table :headers="headers" :items="filas">
            <template #item.editar="{ item }">  
                <v-icon variant="plain"
                class="cursor-pointer mr-2"
                @click="abrirForm(item)">mdi-pencil</v-icon>
            </template>

            <template #item.status="{ item }">
                <v-icon 
                variant="plain"
                @click="toggleStatus(item)" class="cursor-pointer mr-2" :color="item.status ? 'blue' : 'black'">mdi-power
                    {{ item.status ? 'Ativo' : 'Inativo' }}
                </v-icon> 
            </template>
        </v-data-table>
        <FormTotem v-model="openForm"
        :fila="filaSelecionada"
        @salvar="salvarFila"/>
    </v-card>
  </v-container>
</template>
<script setup>
import { ref } from 'vue'
import FormTotem from '../components/Forms/FormTotem.vue'

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

const totem = ["Nenhum", "Totem 1", "Totem 2"]
const tv = ["TV Normal", "TV Corporativa"]
const unidades = ["Prolins FC", "Procon"]

const headers = ref([
  { title: "Nome", key: "nome" }, 
  { title: "Status", key: "status", sortable: false},
  { title: "Configurar", key: "status", sortable: false},
  { title: "Editar", key: "editar", sortable: false },
  { title: "Visualizar", key: "status", sortable: false}
])

const filas = ref([
  { nome: "Atendimento 1", sigla: "SN", descricao: "Normal", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "1 a 500", grupo: "", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: "" },
  { nome: "Atendimento 2", sigla: "PR", descricao: "Prioritário", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "501 a 1000", grupo: "", tempoEspera: "15", tempoAtendimento: "12", status: "", editar: "" },
  { nome: "Atendimento 3", sigla: "EM", descricao: "Emergencial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "1001 a 1500", grupo: "", tempoEspera: "8", tempoAtendimento: "20", status: "", editar: "" },
  { nome: "Atendimento 4", sigla: "ES", descricao: "Especial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "1501 a 2000", grupo: "", tempoEspera: "12", tempoAtendimento: "15", status: "", editar: "" },
  { nome: "Atendimento 5", sigla: "RT", descricao: "Rotina", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "2001 a 2500", grupo: "", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: "" },
  { nome: "Atendimento 6", sigla: "SN", descricao: "Normal", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "2501 a 3000", grupo: "", tempoEspera: "9", tempoAtendimento: "11", status: "", editar: "" },
  { nome: "Atendimento 7", sigla: "PR", descricao: "Prioritário", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "3001 a 3500", grupo: "", tempoEspera: "14", tempoAtendimento: "13", status: "", editar: "" },
  { nome: "Atendimento 8", sigla: "EM", descricao: "Emergencial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "3501 a 4000", grupo: "", tempoEspera: "7", tempoAtendimento: "18", status: "", editar: "" },
  { nome: "Atendimento 9", sigla: "ES", descricao: "Especial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "4001 a 4500", grupo: "", tempoEspera: "11", tempoAtendimento: "14", status: "", editar: "" },
  { nome: "Atendimento 10", sigla: "RT", descricao: "Rotina", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "4501 a 5000", grupo: "", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: "" },
  { nome: "Atendimento 11", sigla: "SN", descricao: "Normal", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "5001 a 5500", grupo: "", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: "" },
  { nome: "Atendimento 12", sigla: "PR", descricao: "Prioritário", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "5501 a 6000", grupo: "", tempoEspera: "15", tempoAtendimento: "12", status: "", editar: "" },
  { nome: "Atendimento 13", sigla: "EM", descricao: "Emergencial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "6001 a 6500", grupo: "", tempoEspera: "8", tempoAtendimento: "20", status: "", editar: "" },
  { nome: "Atendimento 14", sigla: "ES", descricao: "Especial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "6501 a 7000", grupo: "", tempoEspera: "12", tempoAtendimento: "15", status: "", editar: "" },
  { nome: "Atendimento 15", sigla: "RT", descricao: "Rotina", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "7001 a 7500", grupo: "", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: "" },
  { nome: "Atendimento 16", sigla: "SN", descricao: "Normal", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "7501 a 8000", grupo: "", tempoEspera: "9", tempoAtendimento: "11", status: "", editar: "" },
  { nome: "Atendimento 17", sigla: "PR", descricao: "Prioritário", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "8001 a 8500", grupo: "", tempoEspera: "14", tempoAtendimento: "13", status: "", editar: "" },
  { nome: "Atendimento 18", sigla: "EM", descricao: "Emergencial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "8501 a 9000", grupo: "", tempoEspera: "7", tempoAtendimento: "18", status: "", editar: "" },
  { nome: "Atendimento 19", sigla: "ES", descricao: "Especial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "9001 a 9500", grupo: "", tempoEspera: "11", tempoAtendimento: "14", status: "", editar: "" },
  { nome: "Atendimento 20", sigla: "RT", descricao: "Rotina", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "9501 a 10000", grupo: "", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: "" },
  { nome: "Atendimento 21", sigla: "SN", descricao: "Normal", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "10001 a 10500", grupo: "", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: "" },
  { nome: "Atendimento 22", sigla: "PR", descricao: "Prioritário", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "10501 a 11000", grupo: "", tempoEspera: "15", tempoAtendimento: "12", status: "", editar: "" },
  { nome: "Atendimento 23", sigla: "EM", descricao: "Emergencial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "11001 a 11500", grupo: "", tempoEspera: "8", tempoAtendimento: "20", status: "", editar: "" },
  { nome: "Atendimento 24", sigla: "ES", descricao: "Especial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "11501 a 12000", grupo: "", tempoEspera: "12", tempoAtendimento: "15", status: "", editar: "" },
  { nome: "Atendimento 25", sigla: "RT", descricao: "Rotina", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "12001 a 12500", grupo: "", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: "" },
  { nome: "Atendimento 26", sigla: "SN", descricao: "Normal", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "12501 a 13000", grupo: "", tempoEspera: "9", tempoAtendimento: "11", status: "", editar: "" },
  { nome: "Atendimento 27", sigla: "PR", descricao: "Prioritário", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "13001 a 13500", grupo: "", tempoEspera: "14", tempoAtendimento: "13", status: "", editar: "" },
  { nome: "Atendimento 28", sigla: "EM", descricao: "Emergencial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "13501 a 14000", grupo: "", tempoEspera: "7", tempoAtendimento: "18", status: "", editar: "" },
  { nome: "Atendimento 29", sigla: "ES", descricao: "Especial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "14001 a 14500", grupo: "", tempoEspera: "11", tempoAtendimento: "14", status: "", editar: "" },
  { nome: "Atendimento 30", sigla: "RT", descricao: "Rotina", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "14501 a 15000", grupo: "", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: "" },
  { nome: "Atendimento 31", sigla: "SN", descricao: "Normal", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "15001 a 15500", grupo: "", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: "" },
  { nome: "Atendimento 32", sigla: "PR", descricao: "Prioritário", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "15501 a 16000", grupo: "", tempoEspera: "15", tempoAtendimento: "12", status: "", editar: "" },
  { nome: "Atendimento 33", sigla: "EM", descricao: "Emergencial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "16001 a 16500", grupo: "", tempoEspera: "8", tempoAtendimento: "20", status: "", editar: "" },
  { nome: "Atendimento 34", sigla: "ES", descricao: "Especial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "16501 a 17000", grupo: "", tempoEspera: "12", tempoAtendimento: "15", status: "", editar: "" },
  { nome: "Atendimento 35", sigla: "RT", descricao: "Rotina", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "17001 a 17500", grupo: "", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: "" },
  { nome: "Atendimento 36", sigla: "SN", descricao: "Normal", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "17501 a 18000", grupo: "", tempoEspera: "9", tempoAtendimento: "11", status: "", editar: "" },
  { nome: "Atendimento 37", sigla: "PR", descricao: "Prioritário", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "18001 a 18500", grupo: "", tempoEspera: "14", tempoAtendimento: "13", status: "", editar: "" },
  { nome: "Atendimento 38", sigla: "EM", descricao: "Emergencial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "18501 a 19000", grupo: "", tempoEspera: "7", tempoAtendimento: "18", status: "", editar: "" },
  { nome: "Atendimento 39", sigla: "ES", descricao: "Especial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "19001 a 19500", grupo: "", tempoEspera: "11", tempoAtendimento: "14", status: "", editar: "" },
  { nome: "Atendimento 40", sigla: "RT", descricao: "Rotina", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "19501 a 20000", grupo: "", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: "" },
  { nome: "Atendimento 41", sigla: "SN", descricao: "Normal", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "20001 a 20500", grupo: "", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: "" },
  { nome: "Atendimento 42", sigla: "PR", descricao: "Prioritário", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "20501 a 21000", grupo: "", tempoEspera: "15", tempoAtendimento: "12", status: "", editar: "" },
  { nome: "Atendimento 43", sigla: "EM", descricao: "Emergencial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "21001 a 21500", grupo: "", tempoEspera: "8", tempoAtendimento: "20", status: "", editar: "" },
  { nome: "Atendimento 44", sigla: "ES", descricao: "Especial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "21501 a 22000", grupo: "", tempoEspera: "12", tempoAtendimento: "15", status: "", editar: "" },
  { nome: "Atendimento 45", sigla: "RT", descricao: "Rotina", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "22001 a 22500", grupo: "", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: "" },
  { nome: "Atendimento 46", sigla: "SN", descricao: "Normal", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "22501 a 23000", grupo: "", tempoEspera: "9", tempoAtendimento: "11", status: "", editar: "" },
  { nome: "Atendimento 47", sigla: "PR", descricao: "Prioritário", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "23001 a 23500", grupo: "", tempoEspera: "14", tempoAtendimento: "13", status: "", editar: "" },
  { nome: "Atendimento 48", sigla: "EM", descricao: "Emergencial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "23501 a 24000", grupo: "", tempoEspera: "7", tempoAtendimento: "18", status: "", editar: "" },
  { nome: "Atendimento 49", sigla: "ES", descricao: "Especial", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "24001 a 24500", grupo: "", tempoEspera: "11", tempoAtendimento: "14", status: "", editar: "" },
  { nome: "Atendimento 50", sigla: "RT", descricao: "Rotina", unidade: "EEEP Jaime Alencar de Oliveira", intervalo: "24501 a 25000", grupo: "", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: "" }
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
