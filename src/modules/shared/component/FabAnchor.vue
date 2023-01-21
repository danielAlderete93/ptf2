<template>
  <li class="col-3">
    <a :href="url" target="_blank">
      <i class="fa-brands " :class="icon"></i>
    </a>
  </li>

</template>

<script>
export default {
  name: "FabAnchor",
  props: {
    url: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  text-decoration: none;
  list-style: none;
}

i {
  font-size: 25px;
  padding: 10px;
  color: #f3ff00;
}
</style>