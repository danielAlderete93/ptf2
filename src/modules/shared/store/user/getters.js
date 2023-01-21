export const getEquipoUsuario = (state) => {
    return state.equipo
}

export const getJugadoresSegunPosicion = (state) => (posicion = 'all') => {
    if (!state.equipo.jugadores) return []
    if (posicion === 'all') return state.equipo.jugadores
    return state.equipo.jugadores.filter(jugador => samePos(jugador, posicion))
}


function samePos(jugador, posicion) {
    return jugador.posicionFavorita.nombre.toLowerCase().includes(posicion.toLowerCase());
}




