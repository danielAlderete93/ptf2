<template>
  <div class="text-center">
    <h2>Plantilla</h2>
    <p>Selecciona a los jugadores por su posicion y para ver sus detalles y estadisticas.</p>
    <div class="container">
      <div class="row">
        <boton-filtro @click="seleccionaPosicion" data-id=0 msg-value="Portero"/>
        <boton-filtro @click="seleccionaPosicion" data-id=1 msg-value="Defensa"/>
        <boton-filtro @click="seleccionaPosicion" data-id=2 msg-value="Volante"/>
        <boton-filtro @click="seleccionaPosicion" data-id=3 msg-value="Delantero"/>
        <boton-filtro @click="seleccionaPosicion" data-id=4 msg-value="Entrenador"/>
      </div>
    </div>
  </div>
  <hr>
  <div v-show=!this.seRealizoSeleccion>
    <p><small>Para seleccionar, presione boton de arriba</small></p>
    <p class="m-0 py-2">No has seleccionado posiciones para ver a los jugadores.</p>
  </div>
  <template v-for="listaJugadores in jugadoresAMostrar">
    <jugador-table-row :jugadores="listaJugadores.jugadores" :posicion="listaJugadores.posicion"/>
  </template>

</template>
<script>
import {mapGetters} from "vuex";
import {getJugadoresSegunPosicion} from "@/modules/shared/store/user/getters";
import {defineAsyncComponent} from "vue";


export default {
  name: 'JugadorTable',
  components: {
    BotonFiltro: defineAsyncComponent(() => import("@/modules/equipo/components/BotonFiltro")),
    JugadorTableRow: defineAsyncComponent(() => import("@/modules/equipo/components/JugadorTableRow")),
  },
  data() {
    return {
      seleccionados: [],
      jugadoresAMostrar: []
    }
  },
  computed: {
    ...mapGetters('globalModule', ['getJugadoresSegunPosicion']),
    delanteros() {
      return this.getJugadoresSegunPosicion('delantero')
    },
    mediocampistas() {
      return this.getJugadoresSegunPosicion('mediocampista')
    },
    defensores() {
      return this.getJugadoresSegunPosicion('defensa')
    },
    porteros() {
      return this.getJugadoresSegunPosicion('portero')
    },
    dts() {
      return this.getJugadoresSegunPosicion('dt')
    },
    seRealizoSeleccion() {
      console.log("estoy watcheando")
      console.log(this.seleccionados.length > 0)
      return this.seleccionados.length > 0
    }
  },
  watch: {
    seleccionados() {
      this.loadJugadoresSeleccionados()
    }
  },
  methods: {
    seleccionaPosicion(e) {
      const posicion = Number(e.currentTarget.getAttribute('data-id'))

      if (this.seleccionados.includes(posicion)) {
        this.seleccionados = this.seleccionados.filter(e => e !== posicion)
        return
      }
      this.seleccionados.push(posicion)
      this.seleccionados = [...new Set(this.seleccionados)].sort()
    },
    getArrJugadoresParaIndiceSeleccion() {
      return [this.porteros, this.defensores, this.mediocampistas, this.delanteros, this.dts]
    },
    getNombrePosicionParaIndiceSeleccion() {
      return ['Porteros', 'Defensores', 'Mediocampistas', 'Delanteros', 'Entrenadores', 'Jugadores']
    },
    loadJugadoresSeleccionados() {
      let jugadoresSeleccionados = []
      jugadoresSeleccionados = this.seleccionados.map(e => {
            let objJug = {}
            objJug.jugadores = this.getArrJugadoresParaIndiceSeleccion()[e]
            objJug.posicion = this.getNombrePosicionParaIndiceSeleccion()[e]
            return objJug
          }
      )
      this.jugadoresAMostrar = jugadoresSeleccionados
    }
  }
}
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
}


</style>