export const setJugador = (state, jugador) => {
    state.jugadorSeleccionado = jugador
}

export const setAccion = (state, accion) => {
    state.accion = accion
}

export const setInitJugadorToCreate = (state) => {
    state.formJugador = {
        id: -1,
        nombre: '',
        fechaNacimiento: '',
        habilidadPiernas: '',
        habilidadesID: [],
        posicionFavoritaID: null,
        posicionOpcionalID: null,
        equipoID: 52
    }
}


export const setInitJugadorToEdit = (state) => {
    let jugador = state.jugadorSeleccionado
    state.formJugador = {
        id: jugador.id,
        nombre: jugador.nombre,
        fechaNacimiento: jugador.fechaNacimiento,
        habilidadPiernas: jugador.habilidadPiernas,
        habilidadesID: jugador.habilidades.map(h => h.id),
        posicionFavoritaID: jugador.posicionFavorita.id,
        posicionOpcionalID: jugador.posicionOpcional.id,
        equipoID: 52
    }
}

export const setPosicionesJuego = (state, posiciones) => {
    state.formValues.posiciones = posiciones
}

export const setHabilidades = (state, habilidad) => {
    state.formValues.habilidades = habilidad
}

export const updateNombre = (state, nombre) => {
    state.formJugador.nombre = nombre
}
export const updateHabilidadPiernas = (state, piernas) => {
    state.formJugador.habilidadPiernas = piernas
}
export const updateFecha = (state, fecha) => {
    state.formJugador.fechaNacimiento = fecha
}
export const updateHabilidades = (state, idHabilidad) => {

    if (state.formJugador.habilidadesID.includes(idHabilidad)) {
        state.formJugador.habilidadesID = state.formJugador.habilidadesID.filter(h => h !== idHabilidad)
    } else {
        state.formJugador.habilidadesID.push(idHabilidad)
    }

}

export const updatePosicionFavorita = (state, posicion) => {
    state.formJugador.posicionFavoritaID = Number(posicion)
}
export const updatePosicionOpcional = (state, posicion) => {
    state.formJugador.posicionOpcionalID = Number(posicion)
}




