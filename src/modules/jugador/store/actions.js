import torneoApi from "@/api/torneoApi";

export const selectedJugador = ({commit}, jugador) => {
    commit('setJugador', jugador)

}
export const selectedToCreate = ({commit}) => {
    commit('setInitJugadorToCreate')
    commit('setAccion', 'Incorporacion')
}

export const selectedToEdit = ({commit}) => {
    commit('setInitJugadorToEdit')
    commit('setAccion', 'Edicion')
}
export const sendFormJugador = async ({state}) => {
    //todo validate
    const jugador = state.formJugador
    const {data} = await torneoApi.post(`/jugador/nuevo`, jugador)
    //todo validate show message
    console.log(state.formJugador)
}
export const loadFormInitValues = async ({commit}, id) => {
    const habilidadesApi = await torneoApi.get(`/habilidad/all`);
    const posicionesApi = await torneoApi.get(`/posicion/all`);

    commit('setPosicionesJuego', posicionesApi.data)
    commit('setHabilidades', habilidadesApi.data)
}

export const updateNombre = ({commit}, nombre) => {
    commit('updateNombre', nombre)
}

export const updateFechaJugador = ({commit}, fecha) => {
    commit('updateFecha', fecha)
}
export const updateHabilidadPiernas = ({commit}, pierna) => {
    commit('updateHabilidadPiernas', pierna)
}

export const updateHabilidades = ({commit}, habilidad) => {
    commit('updateHabilidades', habilidad)
}
export const updatePosicionFavorita = ({commit}, posicion) => {
    commit('updatePosicionFavorita', posicion)
}
export const updatePosicionOpcional = ({commit}, posicion) => {
    commit('updatePosicionOpcional', posicion)
}