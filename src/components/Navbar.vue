<template>
  <nav class="blue darken-3">
    <div class="nav-wrapper">
      <router-link to="/list" class="left brand-logo">TaskMan</router-link>
      <ul class="right">
        <router-link tag="li" to="/" exact active-class="active">
          <a href="#">Создать</a>
        </router-link>
        <router-link tag="li" to="/list" exact active-class="active">
          <a href="#">Список</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  mounted() {

  }
}

</script>

<style lang="scss" scoped>
  nav{
   // padding: 0 1rem;
  }
</style>