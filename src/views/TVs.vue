<template>
  <v-container fluid class="pa-0  ma-0 fill-height">
    <v-card flat tile class="pa-6 ma-0 fill-height larguratoda" >
        <v-row>
            <v-col>
                <h1>TVs</h1>
            </v-col>
            <v-col class="d-flex justify-end">
                <v-btn
                    color="primary"
                    variant="flat"
                    @click="abrirForm()"
                    >Cadastrar TV</v-btn>
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
        <FormTVs v-model="openForm"
        :fila="filaSelecionada"
        @salvar="salvarFila"/>
    </v-card>
  </v-container>
</template>
<script setup>
import { ref } from 'vue'
import FormTVs from '../components/Forms/FormTVs.vue'

const filaSelecionada = ref(null)
const openForm = ref(false)

const headers = ref([
  { title: "Nome", key: "nome" }, 
  { title: "Programação", key: "programacao", sortable: false},
  { title: "Status", key: "status", sortable: false},
  { title: "Editar", key: "editar", sortable: false },
  { title: "TVs", key: "verfilas", sortable: false}
])

const filas = ref([
  { nome: "Atendimento 1", programacao: "SN", status: "", editar: "", verfilas: "" }
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
