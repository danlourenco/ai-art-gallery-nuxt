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
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/606px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg'
    },
    {
      id: 2,
      title: 'The Persistence of Memory',
      artist: 'Salvador Dali',
      artistBirthYear: '1904',
      year: '1931',
      medium: 'Oil on canvas',
      details: 'Given anonymously',
      src: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg'
    },
    {
      id: 3,
      title: 'The Scream',
      artist: 'Edvard Munch',
      artistBirthYear: '1863',
      year: '1893',
      medium: 'Oil, tempera, and pastel on cardboard',
      details: 'Gift of Mr. and Mrs. Richard Rodgers',
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg'
    }
  ]
</script>
<template>
  <!-- w-full h-lvh -->
  <main class="scroll-smooth overflow-x-scroll snap-x snap-mandatory flex">
    <template v-for="item in items" :key="item.id">
      <ArtExhibit :exhibitData="item" />
    </template>
  </main>
</template>


