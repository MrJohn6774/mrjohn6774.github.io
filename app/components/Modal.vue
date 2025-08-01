<template>
  <Teleport to="body">
    <Transition name="modal" appear>
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      >
        <Transition name="fade" appear>
          <div
            v-if="open"
            class="absolute inset-0 bg-black/60 backdrop-blur-sm"
            @click="close"
          />
        </Transition>

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
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({ open: Boolean });
const emit = defineEmits(["close"]);
const close = () => emit("close");
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  @apply transition transform duration-200 ease-out;
}
.modal-enter-from,
.modal-leave-to {
  @apply opacity-0;
}
.modal-enter-to,
.modal-leave-from {
  @apply opacity-100 scale-100;
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-100;
}
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
.fade-enter-to,
.fade-leave-from {
  @apply opacity-60;
}
</style>
