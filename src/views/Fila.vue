<template>
  <v-container fluid class="pa-6">
    <v-card class="pa-6 ma-6">
        <h1 class="mb-6">Cadastro de Fila</h1>
        <v-form v-model="valid" class="pa-4">
            <v-row>
                <v-col cols="12" md="8">
                    <v-text-field v-model="form.nome" label="Nome" outlined required></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="form.descricao" label="Descrição" outlined required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-select v-model="form.totem" :items="totem" label="Totem" outlined required></v-select>
                </v-col>
                <v-col cols="12" md="4">
                    <v-select v-model="form.grupo" :items="grupo" label="Grupo de Filas" outlined required></v-select>
                </v-col>
                <v-col cols="12" md="4">
                    <v-select v-model="form.tv" :items="tv" label="TV" outlined required>
                    </v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-select v-model="form.unidade" :items="unidades" label="Unidade" outlined required></v-select>
                </v-col>
                <v-col cols="12" md="2">
                    <v-text-field v-model="form.sigla" label="Sigla" outlined required></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                    <v-text-field type="number" v-model="form.inicio" label="Inicio" outlined required></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                    <v-text-field type="number" v-model="form.fim" label="Fim" outlined required></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                    <v-select v-model="form.acompanhante" :items="['Não', 'Sim']" label="Acompanhante" outlined required></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field v-model="form.tempoEspera" label="Tempo de Espera Máximo" placeholder="Em minutos" outlined required></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="form.tempoAtendimento" label="Tempo de Atendimento Máximo" placeholder="Em minutos" outlined required></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <v-select v-model="form.alerta" :items="['Não', 'Sim']" label="Envio de Alerta por Email" outlined required></v-select>
                </v-col>
                <v-col cols="12" md="2">
                    <v-checkbox v-model="form.qrcode" label="QR Code"></v-checkbox>
                </v-col>
            </v-row>

            <h1 class="mb-6">Dias da Semana</h1>
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
                                <v-checkbox v-model="selecionados[periodo]" :value="dia" density="compact"
                                hide-details>
                                </v-checkbox>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            
            <div class="ga-1 d-flex justify-end">
                <v-btn color="red">Cancelar</v-btn>
                <v-btn type="submit" color="success">Cadastrar</v-btn>
            </div>
        </v-form>
        <v-row class="d-flex justify-end">
            <v-col cols="12" md="4">
                <v-text-field label="Pesquisar"></v-text-field>
            </v-col>
            <v-col>
                <v-btn color="primary">Listar por </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="4">
                <v-select v-model="form.unidade" :items="unidades" label="Unidade" outlined required></v-select>
            </v-col>
            <v-col cols="12" md="2">
                <v-select v-model="form.totem" :items="totem" label="Totem" outlined required></v-select>
            </v-col>
            <v-col cols="12" md="2">
                <v-select v-model="form.tv" :items="tv" label="TVs" outlined required></v-select>
            </v-col>
            <v-col cols="12" md="2">
                <v-checkbox label="Status"></v-checkbox>
            </v-col>
            <v-col cols="12" md="2">
                <v-btn color="primary">Filtrar</v-btn>
            </v-col>
        </v-row>
        <v-data-table :headers="headers" :items="filas" />
    </v-card>
  </v-container>
</template>
<script setup>
import { ref } from 'vue'

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
const grupo = ["Nenhum","Exame de Prostata", "Farmácia"]
const tv = ["TV Normal", "TV Corporativa"]
const unidades = ["Prolins FC", "Procon"]
const periodos = ["Manhã", "Tarde"]
const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]

const selecionados = ref({
    Manhã: [],
    Tarde: []
})

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
    nome: "Atendimento 1", sigla: "Sigla", descricao: "AAAAA", unidade: "aaaaa", intervalo: "EEEP Jaime Alencar de Oliveira", grupo: "", tempoEspera: "", tempoAtendimento: "", status: "", editar: ""
}])

</script>
<style scoped>
.v-checkbox {
    color: black;
}
</style>
