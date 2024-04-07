<script setup lang="ts">
definePageMeta({
  colorMode: "light",
});
</script>
<template>
  <main class="relative w-full h-lvh scroll-smooth overflow-auto snap-y snap-mandatory 
  ">
    <section class="flex flex-col justify-center items-center gap-8 m-8 w-full h-lvh snap-start">
      <PictureFrame />
      <ArtLabel />
    </section>
    <section class="flex flex-col justify-center items-center gap-8 m-8 w-full h-lvh snap-start">
      <PictureFrame />
      <ArtLabel />
    </section>
  </main>
</template>

<style scoped>
.my-shadow {
  box-shadow: 0 10px 7px -5px rgba(0, 0, 0, 0.3);
}
</style>
