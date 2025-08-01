<template>
  <article
    class="group relative flex cursor-pointer flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
    @click="$emit('select')"
  >
    <div class="flex-1">
      <h3 class="text-lg font-semibold text-brand group-hover:underline">
        {{ project.title }}
      </h3>
      <p class="mt-1 text-sm text-gray-500">{{ project.subtitle }}</p>
      <p class="mt-3 text-sm leading-relaxed">{{ project.description }}</p>
    </div>

    <ul class="mt-4 flex flex-wrap gap-2 text-xs">
      <li
        v-for="tag in project.tags"
        :key="tag"
        class="rounded bg-brand/10 px-2 py-1 text-brand"
      >
        {{ tag }}
      </li>
    </ul>
  </article>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["select"]);
</script>
