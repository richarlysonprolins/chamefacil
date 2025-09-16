<template>
        <v-dialog v-model="dialog" max-width="900">
            <v-card class="pa-12">
                <v-form @submit.prevent="handleSubmit">
                    <h1 class="mb-6">{{ localFila ? 'Editar Totem' : 'Cadastrar Totem' }}</h1>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-text-field v-model="form.nome" label="Totem" aria-label="Nome do totem" outlined required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-select v-model="form.formato" label="Formato do Totem" outlined required></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="2">
                            <v-checkbox v-model="form.status" label="Ativo"></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-checkbox v-model="form.ordenadogrupo" label="Ordenar por grupo"></v-checkbox>
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
    nome: "",
    formato: "",
    status: "",
    ordenadogrupo: ""
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
