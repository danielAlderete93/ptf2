export const state = () => ({
    jugadorSeleccionado: null,
    idEquipoSeleccionador: 52,
    formJugador: {
        id: -1,
        nombre: '',
        fechaNacimiento: '',
        habilidadPiernas: '',
        habilidadesID: [],
        posicionFavoritaID: null,
        posicionOpcionalID: null,
        equipoID: 52
    },
    formValues: {
        habilidades: [],
        posiciones: []
    },
    accion: ''
})

