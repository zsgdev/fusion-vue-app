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
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title:'',
        body:''
      }
    },
  }
}
</script>
<style scoped>
.create-post {
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  background: cadetblue;
}

.input {
  width: 30%;
  border: 3px solid darkcyan;
  padding: 10px 15px;
  margin: 15px;
  border-radius: 4px;
}

.button {
  align-self: center;
  padding: 10px 15px;
  width: 300px;
  color: white;
  background: darkcyan;
  border: 1px solid teal;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 15px;
}

.button:hover {
  background-color: teal;
  color: white;
}
</style>
