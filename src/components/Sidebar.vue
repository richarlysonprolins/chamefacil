<script>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
    <nav class="sidebar">
        <div>
            <h2>Cadastros em Geral</h2>
            <ul>
                <li><router-link to="/fila">Filas</router-link></li>
                <li><router-link to="/filainterna">Fila Interna</router-link></li>
                <li><router-link to="/postos">Postos</router-link></li>
                <li><router-link to="/unidade">Unidade</router-link></li>
                <li><router-link to="/locais">Locais</router-link></li>
                <li><router-link to="/usuarios">Usuários</router-link></li>
                <li><router-link to="/tvs">TV's</router-link></li>
                <li><router-link to="/programacao">Programação da TV</router-link></li>
                <li><router-link to="/totem">Totem</router-link></li>
                <li><router-link to="/grupofila">Grupo de Fila</router-link></li>
                <li><router-link to="/coletas">Coletas</router-link></li>
                <li><router-link to="/usuariounidade">Usuário-Unidade</router-link></li>
                <li><router-link to="/enquete">Enquete</router-link></li>
            </ul>
        </div>
    </nav>
</template>
<style>
</style>
