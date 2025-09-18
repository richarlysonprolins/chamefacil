<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'

const profile = "Prolins It Solutions"
</script>

<template>
  <div class="app-layout">
    <header class="navbar">
      <div class="d-flex">
         <v-img :width="40" :height="40" src="../src/assets/logo-cf.png"></v-img>
      </div>
      <!-- Arrumar isso, está no meio -->
      <router-link><v-icon>mdi-account</v-icon>{{ profile }}</router-link>
        <button>Sair</button>
    </header>
    <div class="dashboard">
      <Sidebar />
      <div class="main-content">
        <div class="content">
          <RouterView />
        </div>
    </div>
  </div>
  </div>
</template>

<style>
html, body, #app {
  width: 100dvw;
  height: 100vh;
  background-color: rgb(0, 129, 250);
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
}

.app-layout {
  display: flex;
  flex-direction: column;
}

.dashboard {
  display: flex;
  height: 100%;
}

.sidebar {
  width: 400px;      
  background-color: #000000;
  color: white;
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(0, 59, 131);
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
}

.main-content {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column; 
}

.main-content .content {
  width: 100%;
  flex: 1;
}


.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.sidebar li {
  list-style: none;
  padding: 0;
  margin: 0;
  color: white !important;
  border: 1px solid white;
  border-radius: 20px;
  padding: 7px;
  font-size: 15px;
}

.router-link-active {
  font-weight: bold;
}
</style>