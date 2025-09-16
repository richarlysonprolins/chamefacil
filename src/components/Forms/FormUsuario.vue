<template>
        <v-dialog v-model="dialog" max-width="900">
            <v-card class="pa-12">
                <v-form @submit.prevent="handleSubmit">
                    <h1 class="mb-6">{{ localFila ? 'Editar Usuario' : 'Cadastrar Usuario' }}</h1>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-text-field v-model="form.nome" label="Nome" outlined required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="form.login" label="Login" outlined required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="form.senha" label="Senha" outlined required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-select v-model="form.perfil" :items="perfil" label="Perfil" outlined required></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-text-field v-model="form.email" label="Email" outlined required></v-text-field>
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
    login: "",
    senha: "",
    perfil: "",
    email: ""
})

const perfil = ["Administrador", "Atendente"]

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
        login: "",
        senha: "",
        perfil: "",
        email: ""
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
