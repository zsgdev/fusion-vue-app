<template>
  <div>
    <h3>
      Список пользователей
    </h3>
    <div>
      <post-item
          :post="post"
          v-for="(post, idx) in posts"
          :key=idx
      />
    </div>
  </div>
</template>
<script>
import PostItem from "@/views/components/post-blog-components/PostItem";

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>

</style>