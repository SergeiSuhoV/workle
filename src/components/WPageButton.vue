<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    :title="title"
    @range-change="rangeChange"
    @page-change="pageChange"
  >
    <i v-if="loading" />
    <span v-else v-html="html" />sss
  </button>
</template>

<script>
export default {
  name: "VueAdsPageButton",

  props: {
    page: {
      type: [Number, String],
      required: true,
    },

    active: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    loading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    // buttonClasses() {
    //   if (this.disableStyling) {
    //     return {};
    //   }
    //   return {
    //     "focus:vue-ads-outline-none": true,
    //     "vue-ads-ml-1": true,
    //     "vue-ads-leading-normal": true,
    //     "vue-ads-w-6": true,
    //     "vue-ads-bg-teal-500": this.active,
    //     "vue-ads-text-white": this.active,
    //     "vue-ads-cursor-default": this.active || this.disabled,
    //     "vue-ads-bg-gray-200": this.disabled && this.page !== "...",
    //     "vue-ads-text-gray": this.disabled && this.page !== "...",
    //     "hover:vue-ads-bg-gray-100": !this.active && !this.disabled,
    //   };
    // },
  },

  methods: {
    // pageChange() {
    //   if (this.page === "..." || this.disabled || this.active) {
    //     return;
    //   }

    //   this.$emit("page-change");
    // },

    pageChange(page) {
      this.page = page;
    },

    rangeChange(start, end) {
      this.start = start;
      this.end = end;
    },
  },
};
</script>

<style lang="scss">
.buttonClasses {
  max-width: 50px;
  max-height: 40px;
}
</style>
