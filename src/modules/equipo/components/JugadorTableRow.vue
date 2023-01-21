<template>
  <div class="py-5 container-animated">
    <h2>{{ posicion }}</h2>
    <template v-if="tieneJugadores">
      <div class="container">
        <div class="row ">
          <template
              v-for="(jugador,index) in jugadores "
              :key="jugador.id"
          >
            <jugador-table-row-container
                :numero="index+1"
                :jugador="jugador"
            />
          </template>
        </div>
      </div>
    </template>
    <p v-else>(No asignados)</p>
  </div>

</template>
<script>
import {defineAsyncComponent} from "vue";

export default {
  name: 'JugadorTableRow',
  components: {
    JugadorTableRowContainer: defineAsyncComponent(() => import("@/modules/jugador/components/JugadorTableRowContainer"))
  },
  props: {
    jugadores: {
      type: Array,
      default: []
    },
    posicion: {
      type: String,
      required: true
    }
  },
  computed: {
    tieneJugadores() {
      return this.jugadores.length > 0
    }
  },

}
</script>
<style scoped>
.container-animated {
  animation: example ease-in-out .8s;
}

@keyframes example {
  0% {
    max-height: 0;
    opacity: 0;
  }
  50% {
    max-height: 25%;
    opacity: 0.2;
  }
  100% {
    max-height: 100%;
    opacity: 1;
  }
}

ul {
  list-style: none !important;
}

</style>