<template>
  <div class="col-12 mb-3">
    <jugador-card
        :posicion="this.jugador.posicionFavorita.nombre"
        :nombre="this.jugador.nombre"
        :numero="this.numero"
        data-bs-toggle="modal"
        data-bs-target="#jugadorDetailsModal"
        @click="setSelectedJugador"
    />
  </div>

    <jugador-modal id="jugadorDetailsModal"/>


</template>
<script>
import {defineAsyncComponent} from "vue";
import {mapActions} from "vuex";


export default {
  name: 'JugadorTableRowContainer',
  components: {
    JugadorCard: defineAsyncComponent(() => import("@/modules/jugador/components/JugadorCard")),
    JugadorModal: defineAsyncComponent(() => import("@/modules/jugador/components/JugadorModal"))
  },
  props: {
    jugador: {
      type: Object,
      required: true
    },
    numero: {
      type: Number,
      required: true
    },
  },
  methods: {
    ...mapActions('jugadorModule', ["selectedJugador"]),
    setSelectedJugador() {
      this.selectedJugador(this.jugador)
    }

  }

}
</script>
<style scoped>


tr {
  cursor: pointer;
  opacity: 1;
  transition: all .2s ease-in-out;
}

tr:hover {
  opacity: 0.5;
  transition: all .2s ease-in-out;
}


p {
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

</style>