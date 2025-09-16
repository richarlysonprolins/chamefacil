<script>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
    <nav class="sidebar">
        <div>
            <h2>Editar Perfil</h2>
            <ul>
                <li><router-link to="/alterarsenha">Alterar senha</router-link></li>
            </ul>
            <h2>Consultas</h2>
            <ul>
                <li><router-link to="/alocacao">Relatório Alocação</router-link></li>
            </ul>
            <h2>Relatórios</h2>
            <ul>
                <li><router-link to="/relatoriohistorico">Relatório Histórico</router-link></li>
                <li><router-link to="/relatorioenquete">Relatório Enquete</router-link></li>
                <li><router-link to="/relatoriocoleta">Relatório de Coleta</router-link></li>
                <li><router-link to="/relatorioatendimento">Relatório de Atendimento</router-link></li>
                <li><router-link to="/relatoriodesempenho">Relatório de Desempenho</router-link></li>
            </ul>
            <h2>Configurações</h2>
            <ul>
                <li><router-link to="/tvcorporativa">Gerenciar TV Corporativa</router-link></li>
                <li><router-link to="/geracaosenha">Gerenciar Geração de Senha</router-link></li>
                <li><router-link to="/tema">Alterar Tema</router-link></li>
            </ul>
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
