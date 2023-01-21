export default {
    path: '/',
    name: 'jugador',
    component: () => import('@/modules/jugador/pages/JugadorPage'),
    children: [
        {
            path: '/jugador/nuevo',
            name: 'jugador.nuevo',
            component: () => import('@/modules/jugador/pages/JugadorPage'),

        },
        {
            path: '/jugador/editar',
            name: 'jugador.edit',
            component: () => import('@/modules/jugador/pages/JugadorPage'),
        },
        /*
        {
            path: ':idEquipo',
            name: 'equipoPorId',
            component: () => import('@/modules/equipo/pages/EquipoPage'),
            props: (router) => {
                return {
                    //Todo:Chequear que sea si o si un number
                    idEquipo: router.params.id
                }
            }
        }*/
    ]
}