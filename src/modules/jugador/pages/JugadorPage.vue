<template>
  <section-hero>
    <h1>Incorporaciones</h1>
  </section-hero>
  <main class="container bg-black">
    <jugador-form/>
  </main>
</template>

<script>
import {mapState} from "vuex";
import JugadorForm from "@/modules/jugador/components/JugadorForm";
import JugadorHero from "@/modules/jugador/components/JugadorHero";
import SectionHero from "@/modules/shared/component/SectionHero";

export default {
  name: "JugadorPage",
  components: {SectionHero, JugadorHero, JugadorForm},
  data() {
    return {
      title: ''
    }
  },
  computed: {
    ...mapState('jugadorModule', ['jugador', 'accion'])
  }
}
</script>

<style scoped>

</style>