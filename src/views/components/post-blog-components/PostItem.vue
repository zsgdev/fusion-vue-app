<template>
  <div class="post" >
    <div class="post-title">
      {{ post.title }}
    </div>
    <div class="post-body">
      {{ post.body }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'post-item',
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped>
.post {
  display: flex;
  padding: 15px;
  border: 5px solid teal;
  border-radius: 10px;
  margin-top: 55px;
  flex-direction: column;
  background: cadetblue;
  color: white;
  font-weight: bold;
  font-size: 15px;
}

.post-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.post-body {
  margin-top: 25px;
  border:1px solid seagreen;
  height: 50px;
  padding-left: 15px;
  padding-top: 15px;
}
</style>