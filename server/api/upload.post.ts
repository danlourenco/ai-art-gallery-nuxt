export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  setResponseStatus(event, 202);
  const formData = await readMultipartFormData(event);
  console.log({ formData });
  // const temp_url = "http://localhost:8787/";
  const response = await $fetch(runtimeConfig.CLOUDFLARE_WORKER_URL, {
    method: "PUT",
    body: formData,
  });

  console.log({ response });
  return response;
});
