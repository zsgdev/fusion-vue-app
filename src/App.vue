<template>
  <div class="#app">

  </div>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <!--  <router-view/>-->
  <div>
    <post-form/>
    <post-list :posts="posts"/>
  </div>
</template>
<script>
import PostList from "@/views/components/PostList";
import PostForm from "@/views/components/PostForm";

export default {
  components: {
    PostForm, PostList
  },
  data: function () {
    return {
      title: null,
      body: null,
      posts: [
        {id: 1, title: 'Javascript', body: 'Описание поста'},
        {id: 2, title: 'Javascript', body: 'Описание поста'},
        {id: 3, title: 'Javascript', body: 'Описание поста'},
      ]
    }
  },

}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
