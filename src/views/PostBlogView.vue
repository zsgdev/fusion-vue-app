<template>
  <div class="post-blog">
    <post-form @create="createPost($event)" />
    <post-list :posts="posts"/>
  </div>
</template>
<script>
import PostList from "@/views/components/post-blog-components/PostList";
import PostForm from "@/views/components/post-blog-components/PostForm";

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
  methods: {
    createPost(post) {
      console.log(post)
      this.posts.push(post)
    }
  }
    

}
</script>
<style scoped>
.post-blog {
  font-family: 'Roboto', sans-serif;
}
</style>