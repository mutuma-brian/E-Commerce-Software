import LandingPage from './components/LandingPage.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [

    {
        name: 'LandingPage',
        component: LandingPage,
        path: '/'
    }
]

const router = createRouter({history: createWebHistory(), routes})

export default  router