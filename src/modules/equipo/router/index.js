export default {
    name: 'equipo',
    component: () => import('@/modules/equipo/pages/EquipoPage'),
    children: [
        {
            path: '/',
            name: 'equipo',
            component: () => import('@/modules/equipo/pages/EquipoPage')
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