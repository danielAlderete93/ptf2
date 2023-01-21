export const getJugadoresSegunPosicion = (state) => (posicion = 'all') => {
    if (!state.equipo.jugadores) return []
    if (posicion === 'all') return state.equipo.jugadores
    return state.equipo.jugadores.filter(jugador => samePos(jugador, posicion))
}


function samePos(jugador, posicion) {
    return jugador.posicionFavorita.nombre.toLowerCase().includes(posicion.toLowerCase());
}


export const getHabilidades = (state) => {
    const habilidades = state.formValues.habilidades
    const jugador = state.formJugador

    if (!jugador) return habilidades

    return habilidades.filter(h => !jugador.habilidades.includes(h))

}

export const isDisabledPosicion = (state) => (idPosicion) => {

    if (!state.formJugador) return false
    return state.formJugador.posicionOpcional === idPosicion || state.formJugador.posicionFavorita === idPosicion


}



