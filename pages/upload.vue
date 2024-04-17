<script setup lang="ts">
import { ref } from "vue";
import { setErrors } from "@formkit/vue";
const complete = ref(false);

interface FileItem {
  name: "string";
  file: File;
}
const runtimeConfig = useRuntimeConfig();
const selectedImage = ref(null);
const artistStatement = ref("");

const onFileChange = (e) => {
  const file = e.target.files[0];
  selectedImage.value = file;
};

const imageUrl = computed(() => {
  return selectedImage.value ? URL.createObjectURL(selectedImage.value) : null;
});

const submitHandler = async (data) => {
  const body = new FormData();
  data.image.forEach((fileItem: FileItem) => {
    body.append("image", fileItem.file);
  });

  const res = await $fetch("/api/images/upload", {
    method: "PUT",
    body,
    baseURL: runtimeConfig.public.CLOUDFLARE_WORKER_URL,
  })
    .then((res) => {
      console.log(res);
      complete.value = true;
    })
    .catch((e) => {
      console.error(e);
      setErrors("imageForm", ["The server didn’t like our request."]);
    });
};
</script>

<template>
  <main class="flex flex-col lg:flex-row">
    <section class="flex-1">
      <h1>Upload</h1>
      <FormKit
        type="form"
        id="imageForm"
        @submit="submitHandler"
        v-if="!complete"
      >
        <FormKit
          type="file"
          name="image"
          @change="onFileChange"
          label="Upload Images"
          accept=".png,.jpg,.jpeg"
          help="Please upload a PNG or JPEG image."
        />
        <FormKit
          type="textarea"
          name="artist-statement"
          label="Artist Statement"
          placeholder="Enter your artist statement here"
        />
      </FormKit>
      <div v-else>Uploaded!</div>
    </section>
    <section class="flex-1">
      <h1>Preview</h1>
      <div>
        <img :src="imageUrl" v-if="imageUrl" />
      </div>
    </section>
  </main>
</template>
