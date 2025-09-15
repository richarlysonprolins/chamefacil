<template>
        <v-dialog v-model="dialog" max-width="900">
            <v-card class="pa-12">
                <v-form @submit.prevent="handleSubmit">
                    <h1 class="mb-6">{{ localFila ? 'Editar Fila' : 'Cadastrar Fila' }}</h1>
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
                    <v-col></v-col>
                    <div class="ga-1 d-flex justify-end">
                        <v-btn color="red" @click = "dialog =false">Cancelar</v-btn>
                        <v-btn type="submit" color="success">Cadastrar</v-btn>
                    </div>
                </v-form>
            </v-card>
        </v-dialog>
</template>
<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  fila: Object
})

const dialog = defineModel()
const valid = ref(false)
const emit = defineEmits(['salvar'])

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

function handleSubmit() {
  emit('salvar', form.value)
}

watch(
  () => props.fila,
  (val) => {
    if (val) {
      form.value = { ...val }
    } else {
      form.value = {
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
      }
    }
  },
  { immediate: true }
)



</script>
<style scoped>
.ma-30 {
    margin: 0 130px 0 130px;
}
.v-checkbox {
    color: black;
}
</style>
