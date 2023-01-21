<template>
  <div class="modal fade" :id="id" tabindex="-1" aria-labelledby="jugadorModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="jugadorModalLabel">Informacion del jugador</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <template v-if="this.jugadorSeleccionado">
            <jugador-modal-description
                :fecha-nacimiento="this.jugadorSeleccionado.fechaNacimiento"
                :edad="this.jugadorSeleccionado.edad"
                :habilidad-piernas="this.jugadorSeleccionado.habilidadPiernas"
                :nombre="this.jugadorSeleccionado.nombre"
                :equipo="this.equipo.nombre"/>
            <jugador-modal-posicion-juego :posicion-favorita="this.jugadorSeleccionado.posicionFavorita"
                                          :posicion-opcional="this.jugadorSeleccionado.posicionOpcional"/>
            <jugador-modal-habilidades :habilidades="this.jugadorSeleccionado.habilidades"/>
          </template>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-modificar" @click="irAEditaJugador" data-bs-dismiss="modal">Edita
          </button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

        </div>
      </div>
    </div>
  </div>


</template>
<script>
import {mapActions, mapState} from "vuex";
import {defineAsyncComponent} from "vue";

export default {
  name: 'JugadorDetailsModal',
  components: {
    JugadorModalHabilidades: defineAsyncComponent(() => import("@/modules/jugador/components/JugadorModalHabilidades")),
    JugadorModalDescription: defineAsyncComponent(() => import("@/modules/jugador/components/JugadorModalDescription")),
    JugadorModalPosicionJuego: defineAsyncComponent(() => import("@/modules/jugador/components/JugadorModalPosicionesJuego")),
  },
  props: {
    id: {}
  },
  computed: {
    ...mapState('jugadorModule', ['jugadorSeleccionado']),
    ...mapState('globalModule', ['equipo'])
  },
  methods: {
    ...mapActions('jugadorModule', ["selectedToEdit"]),
    irAEditaJugador() {
      this.selectedToEdit()
      this.$router.push({name: 'jugador.edit'})
    }
  },

}
</script>
<style scoped>
.modal {
  background: #000000a6;
}

.modal-content {
  background: url("@/assets/backgrounds/background-tactics.png") 0 0;

}

.modal-title {
  color: #dcdcdc;
}

.modal-header, .modal-body, .modal-footer {
  background: transparent;
  color: #b4b5ba;

}

.btn-modificar {
  background-color: #008738;
  color: white;
}

.btn-close, .btn-secondary {
  background-color: #f3ff00;
  border: 1px solid grey;
  color: black;
  font-weight: bold;
  opacity: 1;
}

h1 {
  color: #dcdcdc;
  font-weight: bold;
}

</style>