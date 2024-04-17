<script setup lang="ts">
const items = [
  {
    id: 1,
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    artistBirthYear: "1853",
    year: "1889",
    medium: "Oil on canvas",
    details: "Acquired through the Lillie P. Bliss Bequest",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/606px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  },
  {
    id: 2,
    title: "The Persistence of Memory",
    artist: "Salvador Dali",
    artistBirthYear: "1904",
    year: "1931",
    medium: "Oil on canvas",
    details: "Given anonymously",
    src: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
  },
  {
    id: 4,
    title: "Rebellion",
    artist: "R.A. Lourenço",
    artistBirthYear: "2021",
    year: "2022",
    medium: "Crayon on Construction Paper",
    details: "Acquired from Storyheights Montessori School",
    src: "/images/artwork/rebellion.png",
  },
];
</script>
<template>
  <div class="grid grid-cols-12 grid-rows-8 auto-rows-auto gap-4 h-lvh">
    <div class="col-span-12">
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Bib & Brush Gallery</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><NuxtLink to="/upload">Upload</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="col-span-12 row-span-8 row-start-2 scroll-smooth overflow-x-scroll snap-x snap-mandatory flex"
    >
      <template v-for="item in items" :key="item.id">
        <ArtExhibit :exhibitData="item" />
      </template>
    </div>
  </div>
</template>
