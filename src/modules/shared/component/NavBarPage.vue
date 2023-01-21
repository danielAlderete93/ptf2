<template>
  <nav class="navbar navbar-expand-lg bg-body-primary ">
    <div class="container-fluid">
      <div class="navbar-brand">
        <a>
          <img src="@/assets/logo_olimpus.png" alt="Logo-olimpus">
        </a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu"
              aria-controls="navbarMenu" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-lg-end" id="navbarMenu">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'equipo'}">Equipos</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'jugador.nuevo'}" @click="this.selectedToCreate">Incorporaciones</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'partido'}">Partidos</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'torneo'}">Torneos</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'inscripcion'}">Inscripciones</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
        </ul>

        <SocialMediaBar class="p-0 py-3 justify-content-center" :is-shown="true"/>

      </div>
    </div>
  </nav>

</template>
<script>
import {defineAsyncComponent} from "vue";
import {mapActions, mapState} from "vuex";

export default {
  name: 'navBarPage',
  computed: {
    ...mapState('globalModule', ['idEquipo'])
  },
  methods: {
    ...mapActions('jugadorModule', ['selectedToCreate'])
  },
  components: {
    SocialMediaBar: defineAsyncComponent(() => import("@/modules/shared/component/SocialMediaBar"))
  }
}
</script>
<style lang="scss" scoped>

li {
  padding: 0 1rem;
  list-style: none;
}

i, a {
  font-size: 17px;
  padding: 0 0.5px;
  text-decoration: none;
}

nav {
  background: black;
  padding: 1rem 1.2rem 1rem 0;

  a {
    font-weight: bold;
    color: #b4b5ba;
    transition: all .1s ease-in-out;

    &:hover {
      color: white;
      transition: all .1s ease-in-out;
    }
  }

  .navbar-toggler {
    background-color: #f3ff00;

    border: 1px solid grey;
  }

  .nav-item {
    width: 100%;
    padding: .5rem;
    border-bottom: 1px solid grey;

    &:first-of-type {
      margin-top: 1.5rem;
      border-top: 2px solid grey;
    }
  }


}


</style>