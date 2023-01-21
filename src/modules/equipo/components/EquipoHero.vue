<template>
  <div class="background-hero">
    <div class="container">
      <div class="row align-items-center p-0">
        <div class="col-4">
          <img :src="require('@/assets/escudo/escudo.png')" alt="Escudo"/>
        </div>
        <div class="col-4">
          <h1 class="hero-title">{{ this.equipo.nombre }}</h1>
        </div>
        <div class=" col-4 d-sm-none d-md-block">
          <img :src="require('@/assets/escudo/escudo.png')" alt="escudo-equipo"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  name: 'EquipoHero',
  computed: {
    ...mapState('globalModule', ['equipo'])
  }
}
</script>
<style scoped>
.hero-title {
  font-size: 1.4rem;
  white-space: pre-wrap;
}

.background-hero {
  position: relative;
  padding: 10rem 0;
  color: white;

}

.background-hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/backgrounds/background-tactics.png');
  filter: grayscale(100%);
  background-position: 50% 50%;
  background-size: cover;
}

.row {
  background: #122a1282;
  position: relative;
  padding: 1rem 0;

}

.row h1 {
  padding: 1rem 0 0 0;
}


img {
  width: 60px;
}

ul {
  list-style: none;
}

</style>