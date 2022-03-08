<template>
  <div class="navbar" style="">
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-link to="/about">Post blog</router-link>
    </div>
  </div>
</template>
<style scoped>
a {
  text-decoration: none; /* Отменяем подчеркивание у ссылки */
}

.navbar {
  display: flex;
  gap: 30px;
  font-weight: bold;
}
</style>