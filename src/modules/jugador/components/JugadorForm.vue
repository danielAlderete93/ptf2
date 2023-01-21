<template>
  <h2>{{ accion }} de jugador</h2>
  <p>Incorpora un jugador al equipo. Ingresa sus datos, su posicion en el campo y sus habilidades.</p>
  <hr>
  <form class="container py-2 text-start">
    <div class="mb-4 ">
      <label for="nombre" class="form-label">Nombre jugador</label>
      <input type="text" class="form-control"
             id="nombre"
             placeholder="Ingresa nombre..."
             v-model="nombre"

      >
    </div>
    <div class="mb-4">
      <label for="fechaNacimiento" class="form-label">Fecha nacimiento</label>
      <input type="date" class="form-control" id="fechaNacimiento" :max="this.getLocalDate"
             placeholder="Fecha nacimiento..."
             v-model="fechaNacimiento"
      >
    </div>
    <div class="mb-4">
      <label for="posicionFavorita" class="form-label">Posicion Favorita</label>
      <select id="posicionFavorita" name="posicionFavorita" class="form-select"
              aria-label="Seleccione posicion favorita" v-model="posicionFavorita">
        <option value="-1" disabled selected>Seleccione una posicion favorita</option>
        <template v-for="posicion in this.formValues.posiciones" :key="posicion.id">
          <option :value="posicion.id" :disabled="isDisabledPosicion(posicion.id)"> {{ posicion.nombre }}</option>
        </template>
      </select>
    </div>
    <div class="mb-4">
      <label for="posicionOpcional" class="form-label">Posicion Opcional</label>
      <select id="posicionOpcional" name="posicionOpcional" class="form-select"
              aria-label="Seleccione posicion opcional" v-model="posicionOpcional">
        <option value="-1" disabled selected>Seleccione una posicion opcional</option>
        <template v-for="posicion in this.formValues.posiciones" :key="posicion.id">
          <option :value="posicion.id" :disabled="isDisabledPosicion(posicion.id)"> {{ posicion.nombre }}</option>
        </template>
      </select>
    </div>
    <div class="mb-4">
      <label class="form-label">Pierna mas habil</label>
      <div class=" form-check">
        <input class="form-check-input" type="radio" name="piernaHabil" id="piernaHabilDerecha" value="Derecha"
               v-model="habilidadPiernas"
        >
        <label class="form-check-label" for="piernaHabilDerecha">
          Derecha
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="piernaHabil" id="piernaHabilIzquierda"
               v-model="habilidadPiernas" value="Izquierda">
        <label class="form-check-label" for="piernaHabilIzquierda">
          Izquierda
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="piernaHabil" id="piernaHabilAmbas"
               v-model="habilidadPiernas" value="Ambas">
        <label class="form-check-label" for="piernaHabilAmbas">
          Ambas
        </label>
      </div>
    </div>
    <div class="mb-4">
      <label class="form-label">Habilidades especiales</label>
      <p class="form-label"><small>Selecciona las habilidades que mas describen al jugador.</small></p>
      <div class="check-group">
        <template v-for="habilidad in this.formValues.habilidades" :key="habilidad.id">
          <div class="form-check form-check-inline">
            <input type="checkbox" class="btn-check" :id="habilidad.id" checked autocomplete="off"
                   :value="habilidad.id"
                   @input="updateHabilidadesJugador">
            <label class="btn btn-primary" :for="habilidad.id">{{ habilidad.nombre }}</label>
          </div>
        </template>
      </div>
    </div>
    <button class="btn btn-success" @click.native.prevent="enviarForm">Enviar</button>
  </form>


</template>

<script>


import {mapActions, mapGetters, mapState} from "vuex";
import {loadFormInitValues, updateHabilidades} from "@/modules/jugador/store/actions";

export default {
  name: "JugadorForm",
  computed: {
    ...mapState('jugadorModule', ['formValues', 'formJugador', 'accion']),
    ...mapGetters('jugadorModule', ['isDisabledPosicion']),
    nombre: {
      get() {
        return this.formJugador.nombre
      },
      set(value) {
        this.updateNombre(value)
      }
    },
    fechaNacimiento: {
      get() {
        return this.formJugador.fechaNacimiento
      },
      set(value) {
        this.updateFechaJugador(value)
      }
    },
    posicionFavorita: {
      get() {
        if (!this.formJugador.posicionFavoritaID) return -1
        return this.formJugador.posicionFavoritaID
      },
      set(value) {
        this.updatePosicionFavorita(value)
      }
    },
    posicionOpcional: {
      get() {
        if (!this.formJugador.posicionOpcionalID) return -1
        return this.formJugador.posicionOpcionalID
      },
      set(value) {
        this.updatePosicionOpcional(value)
      }
    },
    habilidadPiernas: {
      get() {
        return this.formJugador.habilidadPiernas
      },
      set(value) {
        this.updateHabilidadPiernas(value)
      }
    },

    getLocalDate() {
      return new Date().toLocaleDateString('en-ca')
    },
  },
  methods: {
    ...mapActions('jugadorModule',
        ["loadFormInitValues", "sendFormJugador", "updateNombre",
          "updateFechaJugador", "updatePosicionFavorita", "updateHabilidadPiernas",
          "updatePosicionOpcional", "updateHabilidades", 'selectedToCreate']),
    initForm() {
      this.loadFormInitValues()
    },
    updateHabilidadesJugador(e) {
      this.updateHabilidades(e.target.value)
    },
    enviarForm() {
      this.sendFormJugador()
    },
    restartStoreForm() {
      this.selectedToCreate()
    }
  },
  created() {
    this.initForm()
  },
  beforeUnmount() {
    this.restartStoreForm()
  }
}
</script>

<style lang="scss" scoped>
h2 {
  color: white;
}

.form-check-input:checked {
  border-color: #188150;
  background-color: #198754;
}

label {
  color: #188150;
}

select option:first-of-type {
  border-bottom: 1px solid black !important;

}

option {
  color: white;
}

input, select {
  border-color: #575757;
  color: white;
  background-color: #122a1282;
}
</style>