<template>
  <div>
    <div>
      <h1 style="text-align: center">Создание поста</h1>
    </div>
    <div class="create-post">
      <form @submit.prevent.stop class="create-post">
        <input v-model="post.title" class="input" type="text" placeholder="Напишите название">
        <input v-model="post.body" class="input" type="text" placeholder="Напишите описание">
        <button class="button" @click="createPost()">
          Добавить пост
        </button>
      </form>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'post-form',
  data: function () {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      const newPost = {
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost)
      this.title = ''
      this.body = ''
    },
  }
}
</script>
<style scoped>
.create-post {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin: 15px;
  border-radius: 4px;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin: 15px;
  border-radius: 4px;
}

.button {
  align-self: center;
  padding: 10px 15px;
  width: 300px;
  color: teal;
  background: none;
  border: 1px solid teal;
  border-radius: 8px;
  cursor: pointer;
}

.button:hover {
  background-color: teal;
  color: white;
}
</style>
