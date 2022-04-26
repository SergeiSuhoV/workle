<template>
  <div class="w-author">
    <router-link to="/profile" target="_blank">
      <img :src="avatar" :alt="name" class="w-author__avatar" />
    </router-link>
    <div class="w-author__wrapper">
      <h2 class="w-author__name">{{ name }}</h2>
      <h3 class="w-author__email">
        <div v-if="email">@{{ email }}</div>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      requared: false,
    },
    name: {
      type: String,
      requared: true,
    },
    email: {
      type: String,
      requared: true,
    },
  },
};
</script>

<style lang="scss">
.w-author {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-style: normal;
  font-size: 12px;
  line-height: 14px;

  &__avatar {
    width: 30px;
    height: 30px;
    border-radius: 90px;
    margin: 0 10px 0 0;
    cursor: pointer;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  &__name {
    margin: 0 0 3px 0;
    font-weight: 700;
    color: #333333;
  }

  &__email {
    font-weight: 400;
    color: #8d8d8d;
  }
}
</style>
