export default defineEventHandler(async (event) => {
  setResponseStatus(event, 202);
  const formData = await readMultipartFormData(event);
  console.log(formData);
  return {
    status: "success",
    message: "File uploaded",
    data: formData
  }
});
