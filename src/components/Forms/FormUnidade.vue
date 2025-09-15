<template>
        <v-dialog v-model="dialog" max-width="900">
            <v-card class="pa-12">
                <v-form @submit.prevent="handleSubmit" method="POST" action="valida_login.php">
                    <h1 class="mb-6">{{ localFila ? 'Editar Unidade' : 'Cadastrar Unidade' }}</h1>
                    <v-row>
                        <v-col cols="12" md="8">
                            <v-text-field v-model="form.nome" label="Nome" outlined required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="form.cep" label="CEP" outlined required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="3">
                            <v-text-field v-model="form.endereco" label="Endereço" outlined required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field v-model="form.numero" :items="grupo" label="Número" outlined required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-select v-model="form.estado" :items="uf" label="UF" outlined required>
                            </v-select>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field v-model="form.cidade" label="Cidade" outlined required>
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="3">
                            <v-text-field v-model="form.bairro" :items="unidades" label="Bairro" outlined required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field v-model="form.complemento" label="Complemento" outlined required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field type="number" v-model="form.telefoneum" label="1° Telefone" outlined required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field type="number" v-model="form.telefonedois" label="2°Telefone" outlined required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="3">
                            <v-text-field v-model="form.latitude" label="Latitude" outlined required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="form.longitude" label="Longitude" outlined required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-select v-model="form.senhaapp" :items="['Não', 'Sim']" label="Senha App" outlined required></v-select>
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
const valid = ref(false)
const emit = defineEmits(['salvar'])

const form = ref({
    nome: "",
    cep: "",
    totem: "",
    endereco: "",
    numero: "",
    estado: "Selecione um estado",
    cidade: "",
    bairro: "",
    complemento: "",
    telefoneum: "",
    telfonedois: "",
    latitude: "",
    longitude: "",
    senhaapp: "Não",
    qrcode: false,
    dias: []
})

const grupo = ["Nenhum","Exame de Prostata", "Farmácia"]
const unidades = ["Prolins FC", "Procon"]
const uf = ["Acre", "Alagoas","Amapá","Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", ""]

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
