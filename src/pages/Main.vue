<template>
  <div class="main">
    <div class="main main__wrapper" @click="getData">
      <w-cards :cards="images" />
    </div>
    <div class="pagination">
      <div class="pagination__wrapper">
        <w-pagination
          :itemsPage="itemsPage"
          :selectedPage="selectedPage"
          @my-event="changePage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WCards from "@/components/WCards.vue";
import WPagination from "@/components/WPagination.vue";

import Api from "@/utils/api";

export default {
  components: {
    WCards,
    WPagination,
  },
  data() {
    return {
      images: [],
      // TO DO: refactor: Навешать когда-нибудь спинер загрузки
      isPostsLoading: false,
      // Текущая страница по умолчанию
      selectedPage: 1,
      // Количество отображаемых элементов на странице максимальное 30 по дефолту 10
      limitPages: 20,
      // Общее количество страниц
      itemsPage: null,
    };
  },

  methods: {
    changePage(page) {
      this.selectedPage = page;
    },

    async fechImages() {
      try {
        this.isPostsLoading = true;

        const response = await Api.getImages(
          this.selectedPage,
          this.limitPages
        );

        this.images = response.data;

        // Общее количество страниц
        this.itemsPage = Math.ceil(
          response.headers["x-total"] / this.limitPages
        );
      } catch (e) {
        console.log(`Ошибка ${e}`);
      } finally {
        this.isPostsLoading = false;
      }
    },

    changePage(selected) {
      this.selectedPage = selected;
    },
  },

  mounted() {
    this.fechImages();
  },

  watch: {
    selectedPage() {
      this.fechImages();
    },
  },
};
</script>

<style lang="scss">
.main {
  margin: 0 auto;
  background-color: #ffffff;

  &__wrapper {
    width: 100%;
    max-width: 320px;

    @media (min-width: 480px) {
      max-width: 480px;
    }

    @media (min-width: 768px) {
      max-width: 768px;
    }

    @media (min-width: 1000px) {
      max-width: 1000px;
    }
  }
}

.pagination {
  position: fixed;
  width: 100%;
  min-height: 60px;
  bottom: 0;
  color: #ffffff;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: flex-start;
  }

  &__block {
    cursor: pointer;
    margin: 0 5px;
    opacity: 0.6;
  }

  &__current-block {
    opacity: 1;
    padding: 0 15px;
    background: #ffffff48;
    border-radius: 90px;
  }
}
</style>
