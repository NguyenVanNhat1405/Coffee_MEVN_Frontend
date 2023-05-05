<script>
export default {
  props: {
    coffee: { type: Object, required: true },
  },
};
</script>

<template>
  <div>
    <div class="p-1">
      <strong>Title:</strong>
      {{ coffee.title }}
    </div>

    <div class="p-1">
      <strong>Author:</strong>
      {{ coffee.author }}
    </div>

    <div class="p-1">
      <strong>Genre</strong>
      {{ coffee.genre }}
    </div>

    <div class="p-1" style="text-align: justify">
      <strong>Review:</strong>
      {{ coffee.review }}
    </div>

    <div class="p-1">
      <strong>Rating:</strong>
      {{ coffee.rating }}
    </div>

    <div class="p-1">
      <strong>Image:</strong>
      {{ coffee.image }}
    </div>
  </div>
</template>
