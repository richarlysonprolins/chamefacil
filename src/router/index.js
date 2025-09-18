import { createRouter, createWebHistory } from 'vue-router'
import '@mdi/font/css/materialdesignicons.css'
import AlterarSenha from '../views/AlterarSenha.vue'
import Alocacao from '../views/Alocacao.vue'
import RelatorioHistorico from '../views/RelatorioHistorico.vue'
import RelatorioEnquete from '../views/RelatorioEnquete.vue'
import RelatorioColeta from '../views/RelatorioColeta.vue'
import RelatorioAtendimento from '../views/RelatorioAtendimento.vue'  
import RelatorioDesempenho from '../views/RelatorioDesempenho.vue' 
import TVCorporativa from '@/views/TVCorporativa.vue'
import GeracaoSenha from '../views/ManageSenha.vue'
import Tema from '../views/Tema.vue'
import Fila from '../views/Fila.vue'
import FilaInterna from '../views/FilaInterna.vue'
import Filas from '../views/Filas.vue'
import Login from '../views/Login.vue'
import Postos from  '../views/Postos.vue'
import Unidade from '../views/Unidade.vue'
import Locais from '../views/Locais.vue'
import Usuarios from '../views/Usuarios.vue'
import TVs from '../views/TVs.vue'
import Programacao from '../views/Programacao.vue'
import Totem from '../views/Totem.vue'
import GrupoFila from '../views/GrupoFila.vue'
import Coletas from '../views/Coletas.vue'
import UsuarioUnidade from '../views/UsuarioUnidade.vue'
import Enquete from '../views/Enquete.vue'
import Chamada from '../views/Chamada.vue'
import FormFila from '../components/Forms/FormFila.vue'
import FormFilaInterna from '../components/Forms/FormFilaInterna.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/alterarsenha',
      name: 'alterarsenha',
      component: AlterarSenha,
    },
    {
      path: '/alocacao',
      name: 'alocacao',
      component: Alocacao,
    },
    {
      path: '/relatoriohistorico',
      name: 'relatoriohistorico',
      component: RelatorioHistorico,
    },
    {
      path: '/relatorioenquete',
      name: 'relatorioenquete',
      component: RelatorioEnquete,
    },
    {
      path: '/relatoriocoleta',
      name: 'relatoriocoleta',
      component: RelatorioColeta,
    },
    {
      path: '/relatorioatendimento',
      name: 'relatorioatendimento',
      component: RelatorioAtendimento,
    },
    {
      path: '/relatoriodesempenho',
      name: 'relatoriodesempenho',
      component: RelatorioDesempenho,
    },
    {
      path: '/tvcorporativa',
      name: 'tvcorporativa',
      component: TVCorporativa,
    },
    {
      path: '/geracaosenha',
      name: 'geracaosenha',
      component: GeracaoSenha,
    },
    {
      path: '/tema',
      name: 'tema',
      component: Tema,
    },
    {
      path: '/fila',
      name: 'fila',
      component: Fila,
    },
    {
      path: '/filainterna',
      name: 'filainterna',
      component: FilaInterna,
    },
    {
      path: '/formfila',
      name: 'formfila',
      component: FormFila,
    },
    {
      path: '/formfilainterna',
      name: 'formfilainterna',
      component: FormFilaInterna,
    },
    {
      path: '/filas',
      name: 'filas',
      component: Filas,
    },
    {
      path: '/postos',
      name: 'postos',
      component: Postos,
    },
    {
      path: '/unidade',
      name: 'unidade',
      component: Unidade,
    },
    {
      path: '/locais',
      name: 'locais',
      component: Locais,
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: Usuarios,
    },
    {
      path: '/tvs',
      name: 'tvs',
      component: TVs,
    },
    {
      path: '/programacao',
      name: 'programacao',
      component: Programacao,
    },
    {
      path: '/totem',
      name: 'totem',
      component: Totem,
    },
    {
      path: '/grupofila',
      name: 'grupofila',
      component: GrupoFila,
    },
    {
      path: '/coletas',
      name: 'coletas',
      component: Coletas,
    },
    {
      path: '/usuariounidade',
      name: 'usuariounidade',
      component: UsuarioUnidade,
    },
    {
      path: '/enquete',
      name: 'enquete',
      component: Enquete,
    },
    {
      path: '/chamada',
      name: 'chamada',
      component: Chamada,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
