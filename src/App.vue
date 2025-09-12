<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'

</script>

<template>
  <div class="dashboard">
    <Sidebar />
    <div class="main-content">
    <RouterView />
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

.dashboard {
  display: flex;
  height: 100%;
}

.sidebar {
  width: 300px;      
  background-color: #2c3e50;
  color: white;
  padding: 20px;
}

.main-content {
  flex: 1;          
  overflow-y: auto;
}
.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.router-link-active {
  font-weight: bold;
}
</style>