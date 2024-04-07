<script setup lang="ts">
export interface Props {
  artist: string;
  artistBirthYear?: string;
  title: string;
  year?: string;
  medium?: string;
  details?: string;
}

const props = withDefaults(defineProps<Props>(), {
  artist: "R.A. Lourenço",
  title: "Diagonal Freeway",
  year: "1993",
  medium: "Acrylic on canvas",
  details:
    "Partial gift of D. Lourenço in memory of his son Lawrence T. So-and-So.",
});
</script>
<template>
  <div
    class="border-2 border-gray-950 p-4 font-sans min-w-[250px] max-w-[275px] shadow-xl my-shadow"
  >
    <p class="text-xl mb-1">
      <span class="font-bold">{{ props.artist }}</span>
      <span v-if="props.artistBirthYear"> (b. {{ props.artistBirthYear }})</span>
    </p>
    <p class="text-xl mb-1">
      <span class="font-bold italic">{{ props.title }}</span
      ><span v-if="props.year">, </span>
      <span v-if="props.year">{{ props.year }}</span>
    </p>
    <p v-if="props.medium" class="text-md mb-2">{{ props.medium }}</p>
    <p v-if="props.details" class="text-sm">{{ props.details }}</p>
  </div>
</template>
