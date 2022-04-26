<template>
  <div class="w-pagination" v-if="itemsPage > 0">
    <div
      v-for="page in 10"
      :key="page.id"
      class="w-pagination__item"
      :class="{
        'w-pagination_selectedItem': page === selectedPage,
      }"
      @click="$emit('myEvent', page)"
    >
      {{ page }}
    </div>
  </div>
</template>

<script>
import WPageButton from "@/components/WPageButton.vue";

export default {
  components: {
    WPageButton,
  },

  props: {
    selectedPage: {
      type: Number,
      default: 0,
      validator: (page) => {
        return page >= 0;
      },
    },

    itemsPage: {
      type: Number,
      default: 10,
      validator: (itemsPerPage) => {
        return itemsPerPage > 0;
      },
    },
  },

  methods: {
    changePage(page) {},
  },
};
</script>

<style lang="scss">
.w-pagination {
  display: flex;
  flex-direction: row;
  color: #ffffff;

  &__item {
    margin: 0 15px 0 0;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
  }

  &__item:last-child {
    margin: 0;
  }

  &_selectedItem {
    font-weight: 700;
    font-size: 18px;
    cursor: default;
  }
}

// ///////////@at-root
// @keyframes cdp-in {
//   from {
//     transform: scale(1.5);
//     opacity: 0;
//   }
//   to {
//     transform: scale(1);
//     opacity: 1;
//   }
// }

// .cdp {
//   position: relative;
//   text-align: center;
//   font-size: 0;
//   z-index: 6;

//   &_i {
//     cursor: pointer;
//     font-size: 14px;
//     text-decoration: none;

//     text-transform: uppercase;
//     margin: 0 3px 6px;
//     min-width: 100px;
//     border: 1px #fff solid;
//     line-height: 38px;
//     padding: 0;
//     color: #fff;
//     font-weight: 700;
//     letter-spacing: 0.03em;
//     display: none;

//     &:first-child,
//     &:last-child {
//       border: 1px rgb(204, 117, 18) solid;
//     }

//     &:last-child,
//     &:nth-child(2),
//     &:nth-last-child(2) {
//       display: inline-block;
//     }
//   }

//   &_i:hover {
//     background-color: rgba(90, 92, 73, 0.836);
//     color: #fff;
//   }

//   &:not([actpage="1"]) &_i:nth-child(1) {
//     display: inline-block;
//   }
// }
// @for $i from 1 through 80 {
//   .cdp[actpage="#{$i}"] {
//     // 3 before
//     .cdp_i:nth-child(#{$i - 2}):not(:first-child):not(:nth-child(2)) {
//       display: inline-block;
//       pointer-events: none;
//       color: transparent;
//       border-color: transparent;
//       width: 50px;
//       &:after {
//         content: "...";
//         color: #fff;
//         font-size: 32px;
//         margin-left: -6px;
//       }
//     }
//     // 2 before
//     .cdp_i:nth-child(#{$i - 1}):not(:first-child) {
//       display: inline-block;
//     }
//     // before
//     .cdp_i:nth-child(#{$i}):not(:first-child) {
//       display: inline-block;
//     }
//     // active
//     .cdp_i:nth-child(#{$i + 1}) {
//       background-color: #000;
//       color: #fff;
//       display: inline-block;

//       + .cdp_i:last-child {
//         display: none !important;
//       }
//     }
//     // next
//     .cdp_i:nth-child(#{$i + 2}):not(:last-child) {
//       display: inline-block;
//     }
//     // 2 next
//     .cdp_i:nth-child(#{$i + 3}):not(:last-child) {
//       display: inline-block;
//     }
//     // 3 next
//     .cdp_i:nth-child(#{$i + 4}):not(:last-child):not(:nth-last-child(2)) {
//       display: inline-block;
//       pointer-events: none;
//       color: transparent;
//       border-color: transparent;
//       width: 50px;
//       &:after {
//         content: "...";
//         color: #fff;
//         font-size: 32px;
//         margin-left: -6px;
//       }
//     }
//   }
// }

////////
</style>
