<script setup lang="ts">

  const items = [
    {
      id: 1,
      title: 'The Starry Night',
      artist: 'Vincent van Gogh',
      artistBirthYear: '1853',
      year: '1889',
      medium: 'Oil on canvas',
      details: 'Acquired through the Lillie P. Bliss Bequest',
      src: '/images/artwork/aquatic.jpg'
    },
    {
      id: 2,
      title: 'The Persistence of Memory',
      artist: 'Salvador Dali',
      artistBirthYear: '1904',
      year: '1931',
      medium: 'Oil on canvas',
      details: 'Given anonymously',
      src: '/images/artwork/rebellion.png'
    },
    {
      id: 3,
      title: 'The Scream',
      artist: 'Edvard Munch',
      artistBirthYear: '1863',
      year: '1893',
      medium: 'Oil, tempera, and pastel on cardboard',
      details: 'Gift of Mr. and Mrs. Richard Rodgers',
      src: '/images/artwork/rebellion.png'
    }
  ]
</script>
<template>
  <main class="relative w-full h-lvh scroll-smooth overflow-auto snap-y snap-mandatory">
    <template v-for="item in items" :key="item.id">
      <ArtExhibit :exhibitData="item" />
    </template>
  </main>
</template>


