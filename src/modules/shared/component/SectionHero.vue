<template>
  <div class="background-hero">
    <div class="container">
      <div class="row align-items-center p-2">
        <slot>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionHero"
}
</script>

<style scoped>

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
</style>