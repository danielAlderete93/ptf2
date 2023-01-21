<template>

  <main class=" background-section">
    <EquipoHero/>
    <JugadorTable/>
  </main>

</template>

<script>

import {defineAsyncComponent} from "vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "EquipoPage",
  methods: {
    ...mapActions('globalModule', ["loadEquipo"]),
    setEquipo() {
      this.loadEquipo(this.idEquipo)
    }
  },
  computed: {
    ...mapState('globalModule', ["idEquipo"])
  },
  components: {
    EquipoHero: defineAsyncComponent(() => import("@/modules/equipo/components/EquipoHero")),
    JugadorLayout: defineAsyncComponent(() => import("@/modules/jugador/components/JugadorModal")),
    JugadorTable: defineAsyncComponent(() => import("@/modules/equipo/components/JugadorTable"))
  },
  created() {
    this.setEquipo()
  }
}

</script>

<style scoped>
.background-section {
  background: black;
  color: white;
}


ul {
  list-style: none;
}

</style>

