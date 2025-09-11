<template>
  <v-container>
    <h2>Dias da Semana</h2>

    <v-table>
      <thead>
        <tr>
          <th></th>
          <th v-for="dia in dias" :key="dia">{{ dia }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="periodo in periodos" :key="periodo">
          <td>{{ periodo }}</td>
          <td v-for="dia in dias" :key="dia">
            <v-checkbox
              v-model="selecionados[periodo]"
              :value="dia"
              density="compact"
              hide-details
            />
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup>
import { ref } from "vue"

const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
const periodos = ["Manhã", "Tarde"]

// Objeto com arrays para armazenar os selecionados
const selecionados = ref({
  Manhã: [],
  Tarde: []
})
</script>
