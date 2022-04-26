<template>
  <section class="w-cards">
    <div v-if="!cards">LOADING IMAGES</div>
    <div v-for="card in cards" :key="card.id" class="w-cards__item">
      <w-card :data="card"/>
    </div>
  </section>
</template>

<script>
import WCard from "@/components/WCard.vue";

export default {
  components: {
    WCard,
  },
  props: {
    cards: {
      type: [Array, Object],
      requared: false,
    },
  },
};
</script>

<style lang="scss">
.w-cards {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, minmax(100px, auto));
  justify-content: center;

  @media (min-width: 480px) {
    grid-template-columns: repeat(1, minmax(100px, auto));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(100px, 320px));
    gap: 0 20px;
  }

  &__item{
    width: 100%;
  }
}
</style>
