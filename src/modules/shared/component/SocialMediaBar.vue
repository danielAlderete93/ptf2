<template>
  <ul v-show="isShown" class="row m-0">
    <FabAnchor url="#" icon="fa-instagram"/>
    <FabAnchor url="#" icon="fa-facebook-f"/>
    <FabAnchor url="#" icon="fa-twitter"/>
  </ul>
</template>
<script>
import {defineAsyncComponent} from "vue";

export default {
  name: 'SocialMediaBar',
  props: {
    isShown: {
      type: Boolean,
      required: true
    }
  },
  components: {
    FabAnchor: defineAsyncComponent(() => import('@/modules/shared/component/FabAnchor'))
  }
}
</script>
<style lang="scss" scoped>

i, a {
  font-size: 18px;
  padding: 0 0.5px;
}


nav {
  padding: 30px;
  background: black;

  a {
    font-weight: bold;
    color: #b4b5ba;
    transition: all .1s ease-in-out;

    &:hover {
      color: white;
      transition: all .1s ease-in-out;
    }

  }
}


</style>