<script setup lang="ts">
export interface Props {
  exhibitData: {
    id: number;
    title: string;
    artist: string;
    artistBirthYear: string;
    year: string;
    medium: string;
    details: string;
    src: string;
  };
}

const props = defineProps<Props>();
</script>
<template>
  <section
    class="flex flex-col justify-center items-center gap-8 w-full h-lvh snap-start"
  >
    <PictureFrame :src="props.exhibitData.src" />
    <ArtLabel
      :artist="props.exhibitData.artist"
      :artist-birth-year="props.exhibitData.artistBirthYear"
      :medium="props.exhibitData.medium"
      :title="props.exhibitData.title"
      :year="props.exhibitData.year"
      :details="props.exhibitData.details"

    />
  </section>
</template>
