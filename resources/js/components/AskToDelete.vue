<template>
    <div class="container text-sm flex gap-5 items-center">
        <button
          class="action px-3 py-2 rounded-xl border border-white"
          @click.stop="clicked"
        >بله، پاکش کن</button>
      <span>آیا از حذف اطمینان دارید؟</span>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      clicked() {
        this.$emit("myClick");
      }
    }
  };
  </script>