<template>
  <main>
    <section
      class="relative flex h-screen items-center justify-center overflow-hidden text-center"
    >
      <img
        src="/banner.jpg"
        alt="city skyline banner"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-brand/20 to-transparent"
      />

      <div class="relative z-10 max-w-2xl px-4 mb-80 text-white">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
          John Cheng
        </h1>
        <p class="mx-auto mt-4 max-w-prose text-lg">
          Engineer • Developer • Tinkerer
        </p>
      </div>

      <button
        @click="scrollDown"
        aria-label="Scroll down"
        class="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/40 bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </section>

    <div class="container mx-auto max-w-3xl px-4 py-12">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Prologue</h2>
        <p>
          Grew up in Hong Kong — where every square metre counts. I learn and
          build through the two monitors perched above my tiny desk. Those
          screens became my launch-pad for creativity and engineering
          exploration.
        </p>
      </section>

      <section class="mt-12">
        <h2 class="mb-6 text-2xl font-semibold">Projects</h2>
        <div class="grid gap-6 sm:grid-cols-2">
          <ProjectCard
            v-for="p in projects"
            :key="p.id"
            :project="p"
            @select="open(p)"
          />
        </div>
      </section>

      <footer class="mt-16 border-t pt-8 text-center text-sm text-gray-500">
        © {{ new Date().getFullYear() }} John Cheng. All rights reserved.
      </footer>
    </div>

    <Modal :open="Boolean(active)" @close="close" v-if="active">
      <h3 class="text-2xl font-bold text-brand">{{ active.title }}</h3>
      <p class="mt-1 text-sm text-gray-500">{{ active.subtitle }}</p>
      <p class="mt-4 leading-relaxed">{{ active.description }}</p>

      <ul class="mt-4 flex flex-wrap gap-2 text-xs">
        <li
          v-for="tag in active.tags"
          :key="tag"
          class="rounded bg-brand/10 px-2 py-1 text-brand"
        >
          {{ tag }}
        </li>
      </ul>

      <a
        :href="active.link"
        target="_blank"
        class="mt-6 inline-block rounded-lg bg-brand px-4 py-2 text-white hover:bg-brand/90"
      >
        View Source
      </a>
    </Modal>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { projects } from "~/data/projects";
import ProjectCard from "~/components/ProjectCard.vue";
import Modal from "~/components/Modal.vue";

const active = ref(null);
function open(p) {
  active.value = p;
}
function close() {
  active.value = null;
}
function scrollDown() {
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
}
</script>
