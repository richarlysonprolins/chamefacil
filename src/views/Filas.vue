<template>
  <v-data-table :headers="headers" :items="filas" />
</template>

<script setup>
import { ref } from 'vue'

const headers = ref([
  { title: "Nome", key: "nome" },
  { title: "Sigla", key: "sigla" },
  { title: "Descrição", key: "descricao" },
  { title: "Unidade", key: "unidade" },
  { title: "Intervalo", key: "intervalo" },
  { title: "Grupo", key: "grupo" },
  { title: "Tempo de Espera Max.", key: "tempoEspera" },
  { title: "Tempo de Atendimento Max.", key: "tempoAtendimento" }, 
  { title: "Status", key: "status" },
  { title: "Editar", key: "editar" }
])
const filas = ref([{
    nome: "Nome", sigla: "Sigla", descricao: "AAAAA", unidade: "aaaaa", intervalo: "aaaaaa", grupo: "", tempoEspera: "", tempoAtendimento: "", status: "", editar: ""
}])
</script>