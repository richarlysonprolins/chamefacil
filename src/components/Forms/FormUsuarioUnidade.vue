<template>
        <v-dialog v-model="dialog" max-width="900">
            <v-card class="pa-12">
                <v-form @submit.prevent="handleSubmit">
                    <h1 class="mb-6">{{ localFila ? 'Editar Usuario-Unidade' : 'Cadastrar Usuario-Unidade' }}</h1>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-select v-model="form.atendente" label="Atendente" aria-label="Nome do totem" outlined required></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-select v-model="form.unidade" label="Unidades/Posto de Atendimento" outlined required></v-select>
                        </v-col>
                    </v-row>    
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
const emit = defineEmits(['salvar'])

const form = ref({
    atendente: "Escolha um atendente",
    unidade: "Escolha uma loja (posto de atendimento)..."
})

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
