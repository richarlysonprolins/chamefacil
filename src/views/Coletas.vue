<template>
  <v-container fluid class="pa-0  ma-0 fill-height">
    <v-card flat tile class="pa-6 ma-0 fill-height larguratoda" >
        <v-row>
            <v-col>
                <h1>Coletas</h1>
            </v-col>
            <v-col class="d-flex justify-end">
                <v-btn
                    color="primary"
                    variant="flat"
                    @click="abrirForm()"
                    >Cadastrar Coleta</v-btn>
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

const totem = ["Nenhum", "Totem 1", "Totem 2"]
const tv = ["TV Normal", "TV Corporativa"]
const unidades = ["Prolins FC", "Procon"]

const headers = ref([
  { title: "Coleta", key: "coleta" },
  { title: "Descrição", key: "descricao" },
  { title: "Usuário", key: "usuario" },
  { title: "Posto", key: "posto" },
  { title: "Status", key: "status", sortable: false},
  { title: "Editar", key: "editar", sortable: false }
])

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
