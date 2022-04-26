<template>
  <div class="w-card">
    <div class="w-card__author">
      <w-author
        :avatar="data.user.profile_image.medium"
        :name="data.user.name"
        :email="data.user.social.instagram_username"
      />
    </div>
    <div class="w-card__photo"><w-photo 
    :linkImage="data.urls.regular"
    /></div>
    <div class="w-card__views"><w-views /></div>
  </div>
</template>

<script>
import WAuthor from "./WAuthor.vue";
import WPhoto from "./WPhoto.vue";
import WViews from "./WViews.vue";
export default {
  components: {
    WAuthor,
    WPhoto,
    WViews,
  },

  props: {
    data: {
      type: Object,
      requared: true,
    },
  },
};
</script>

<style lang="scss">
.w-card {
  max-width: 320px;
  max-height: 304px;
  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    max-width: 440px;
    max-height: 380px;
  }

  @media (min-width: 768px) {
    max-width: 320px;
    max-height: 304px;
  }

  &__author {
    margin: 10px auto 10px 10px;

    @media (min-width: 480px) {
      margin: 10px auto 10px 0;
    }

    @media (min-width: 768px) {
      margin: 10px auto 10px 10px;
    }
  }

  &__views {
    display: flex;
    justify-content: flex-end;
    margin: 10px 10px 8px auto;

    @media (min-width: 480px) {
      margin: 10px 0 6px auto;
    }

    @media (min-width: 480px) {
      margin: 10px 10px 8px auto;
    }
  }
}
</style>
