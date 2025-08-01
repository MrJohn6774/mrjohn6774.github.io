<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="close" />

    <div
      class="relative mx-4 max-w-lg rounded-2xl bg-white p-6 shadow-lg sm:mx-0"
    >
      <button
        class="absolute right-3 top-3 text-2xl font-semibold text-gray-400 hover:text-gray-600"
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
const props = defineProps({
  open: Boolean,
});
const emit = defineEmits(["close"]);
function close() {
  emit("close");
}
</script>
