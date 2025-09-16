<template>
        <v-dialog v-model="dialog" max-width="900">
            <v-card class="pa-12">
                <v-form @submit.prevent="handleSubmit" method="POST" action="valida_login.php">
                    <h1 class="mb-6">{{ localFila ? 'Editar Coleta' : 'Cadastrar Coleta' }}</h1>
                    <v-row>
                        <v-col cols="12" md="8">
                            <v-text-field v-model="form.coleta" label="Coleta" outlined required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="form.descricao" label="Descrição" outlined required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-select v-model="form.atendente" :items="atendente" label="Atendente" outlined required></v-select>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-select v-model="form.posto" :items="posto" label="Posto" outlined required></v-select>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-select v-model="form.local" :items="local" label="Local de Chamada" outlined required>
                            </v-select>
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
    coleta: "",
    descricao: "",
    atendente: "",
    posto: "",
    local: ""
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
        coleta: "",
        descricao: "",
        atendente: "",
        posto: "",
        local: ""
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
