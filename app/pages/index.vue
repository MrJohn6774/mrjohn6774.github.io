<template>
  <main class="container mx-auto max-w-3xl px-4 py-12">
    <!-- Hero -->
    <section class="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-brand sm:text-5xl">
        John Cheng
      </h1>
      <p class="mx-auto mt-4 max-w-prose text-lg">
        Engineer • Developer • Tinkerer
      </p>
    </section>

    <!-- Prologue -->
    <section class="mt-12 space-y-4">
      <h2 class="text-2xl font-semibold">Prologue</h2>
      <p>
        Born and raised in Hong Kong — where every square metre counts. I learn
        and build through the two monitors perched above my tiny desk. Those
        screens became my launch-pad for creativity and engineering exploration.
      </p>
    </section>

    <!-- Projects -->
    <section class="mt-12">
      <h2 class="mb-6 text-2xl font-semibold">Projects</h2>
      <div class="grid gap-6 sm:grid-cols-2">
        <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-16 border-t pt-8 text-center text-sm text-gray-500">
      © {{ new Date().getFullYear() }} John Cheng. All rights reserved.
    </footer>
  </main>
</template>

<script setup>
import { projects } from "~/data/projects";
</script>
