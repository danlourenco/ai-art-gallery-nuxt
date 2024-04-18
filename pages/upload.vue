<script setup lang="ts">
import { ref } from "vue";
import { setErrors } from "@formkit/vue";
import { useChat } from "ai/vue";

const { messages, input, handleSubmit } = useChat({
  api: "/api/generate",
});

const runtimeConfig = useRuntimeConfig();
const complete = ref(false);
const selectedImage = ref(null);
const selectedImageDataUrl = ref("");
const statement = ref("Testing");
const audioSrc = ref("");

const onFileChange = async (e) => {
  const file = e.target.files[0];
  selectedImage.value = file;
  selectedImageDataUrl.value = await toBase64(file);
};

const imageUrl = computed(() => {
  return selectedImage.value ? URL.createObjectURL(selectedImage.value) : null;
});

const generateAudio = async () => {
  console.log("generate audio!");
  const res = await $fetch("/api/audio", {
    method: "POST",
    body: {
      text: statement.value,
    },
  });
  console.log(res);
  audioSrc.value = URL.createObjectURL(res);
};

const submitHandler = async (data) => {
  const formData = new FormData();
  formData.append("image", data.image[0].file);

  const res = await $fetch("/api/images/upload", {
    method: "PUT",
    body: formData,
    baseURL: runtimeConfig.public.CLOUDFLARE_WORKER_URL,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.error(e);
      setErrors("imageForm", ["The server didn’t like our request."]);
    });
};

const generateArtistStatement = (e: Event) => {
  console.log(e);
  statement.value = "This is a test artist statement.";
  console.log(imageUrl.value as string);
  $fetch("/api/generate", {
    method: "POST",
    body: JSON.stringify({
      image: selectedImageDataUrl.value,
    }),
  }).then((res) => {
    statement.value = res.response.choices[0].message.content;
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
          label="Upload Image"
          accept=".png,.jpg,.jpeg"
          help="Please upload a PNG or JPEG image."
        />
        <FormKit
          v-model="statement"
          type="textarea"
          name="artist-statement"
          label="Artist Statement"
          placeholder="Enter your artist statement here"
        />
        <button
          type="button"
          class="btn btn-secondary"
          @click="generateArtistStatement"
        >
          Generate Artist Statement
        </button>
        <button type="button" class="btn btn-secondary" @click="generateAudio">
          Generate Audio
        </button>
        <audio ref="audioEl" controls :src="audioSrc"></audio>
      </FormKit>
      <div v-else>Uploaded!</div>
    </section>
    <section class="flex-1">
      <h1>Preview</h1>
      <div>
        <img :src="imageUrl" v-if="imageUrl" />
        <p class="whitespace-pre-line">{{ statement }}</p>
      </div>
    </section>
  </main>
</template>
