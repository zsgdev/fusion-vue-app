<template>
  <div class="app">
    <navbar/>
  </div>
<router-view/>

</template>
<script>
import PostList from "@/views/components/post-blog-components/PostList";
import PostForm from "@/views/components/post-blog-components/PostForm";
import Navbar from "@/views/components/navbar/Navbar"

export default {
  components: {
    PostForm, PostList, Navbar
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
  methods: {
    createPost(post) {
      console.log(post)
      this.posts.push(post)
    }
  }

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

.app {
  font-family: 'Roboto', sans-serif;
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
