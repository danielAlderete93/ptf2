import {createRouter, createWebHistory} from 'vue-router'
import torneoPage from "@/modules/torneo/views/TorneoPage";
import inscripcionPage from "@/modules/inscripcion/views/InscripcionPage";
import partidoPage from "@/modules/partido/views/PartidoPage";
import equipoRouter from "@/modules/equipo/router";
import jugadorRouter from "@/modules/jugador/router";

const routes = [
    {
        path: '/equipo',
        ...equipoRouter
    },
    {
        path: '/jugador',
        ...jugadorRouter
    },
    {
        path: '/torneo',
        name: 'torneo',
        component: torneoPage
    },
    {
        path: '/inscripcion',
        name: 'inscripcion',
        component: inscripcionPage
    },
    {
        path: '/partido',
        name: 'partido',
        component: partidoPage
    },
    {
        path: '/about',
        name: 'about',
        // router level code-splitting
        // this generates a separate chunk (about.[hash].js) for this router
        // which is lazy-loaded when the router is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
