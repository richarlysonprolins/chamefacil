<template>
  <v-container fluid class="pa-0 fill-height">
    <v-card flat tile class="pa-6 ma-0 fill-height">
        <v-row>
            <v-col><h1 class="mb-6">Cadastro de Fila Interna</h1></v-col>
            <v-col class="d-flex justify-end">
                <v-btn
                    color="primary"
                    variant="flat"
                    @click="abrirForm()"
                    >Cadastrar Fila</v-btn>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-end">
            <v-col cols="12" md="4">
                <v-text-field label="Pesquisar"></v-text-field>
            </v-col>
            <v-col>
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
        <FormFilaInterna v-model="openForm"
        :fila="filaSelecionada"
        @salvar="salvarFila"/>
    </v-card>
  </v-container>
</template>
<script setup>
import { ref } from 'vue'
import FormFilaInterna from '../components/Forms/FormFilaInterna.vue'

const filaSelecionada = ref(null)
const openForm = ref(false) 

const headers = ref([
  { title: "Nome", key: "nome" },
  { title: "Descrição", key: "descricao" },
  { title: "Chama pelo Nome", key: "chamada" },
  { title: "Tempo de Espera Max.", key: "tempoEspera" },
  { title: "Tempo de Atendimento Max.", key: "tempoAtendimento" }, 
  { title: "Status", key: "status" },
  { title: "Editar", key: "editar" }
])
const filas = ref([{
    nome: "Exame de Prostata", descricao: "Normal", chamada: "Sim", tempoEspera: "10", tempoAtendimento: "10", status: "", editar: ""}
])

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

.fill-height {
    height: 100%;
}
</style>
