<template>
  <div>
    <h3>
      Список пользователей
    </h3>
    <div>
      <post-item
          :post="post"
          v-for="post in posts"
      />
    </div>
  </div>
</template>
<script>
import PostItem from "@/views/components/PostItem";

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