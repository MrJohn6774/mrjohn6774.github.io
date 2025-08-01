<template>
  <div
    v-if="open"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
  >
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="close" />

    <div
      class="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-8 shadow-xl"
    >
      <button
        class="absolute right-4 top-4 text-2xl font-semibold text-gray-400 hover:text-gray-600"
        @click="close"
        aria-label="Close modal"
      >
        &times;
      </button>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({ open: Boolean });
const emit = defineEmits(["close"]);
const close = () => emit("close");
</script>
