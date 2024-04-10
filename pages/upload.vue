<script setup lang="ts">
import { ref } from 'vue'
import { setErrors } from '@formkit/vue'
const complete = ref(false)

const submitHandler = async (data) => {
  console.log(data);
  // We need to submit this as a multipart/form-data
  // to do this we use the FormData API.
  const body = new FormData()
  // We can append other data to our form data:
  // body.append('name', data.name)
  // Finally, we append the actual File object(s)
  data.image.forEach((fileItem) => {
    body.append('image', fileItem.file)
  })

  // We'll perform a real upload to httpbin.org
  const res = await fetch('http://localhost:3000/api/upload', {
    method: 'POST',
    body: body,
  })

  if (res.ok) {
    complete.value = true
  } else {
    setErrors('imageForm', ['The server didn’t like our request.'])
  }
}
</script>

<template>
  <main>
    <h1>Upload</h1>
    <FormKit type="form" id="imageForm" @submit="submitHandler" v-if="!complete">
      <FormKit
        type="file"
        name="image"
        label="Upload Images"
        accept=".png,.jpg,.jpeg"
        help="Please upload a PNG or JPEG image."
      />
    </FormKit>
    <div v-else>
      <p>Upload complete!</p>
      </div>
  </main>
</template>
