<template>
  <div class="w-photo">
    <img class="w-photo__image" :src="linkImage" :alt="altImage" />
  </div>
</template>

<script>
export default {
  props: {
    linkImage: {
      type: String,
    },
    altImage: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.w-photo {
  &__image {
    width: 320px;
    height: 230px;
    object-fit: cover;

    @media (min-width: 480px) {
      width: 440px;
      height: 300px;
    }

    @media (min-width: 768px) {
      width: 320px;
      height: 230px;
    }
  }
}
</style>
