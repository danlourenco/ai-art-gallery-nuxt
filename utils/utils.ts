const getImage = (imgFile: string) => {
  // const url = new URL(`../assets/artwork/${imgFile}`, import.meta.url).href;
  const url = new URL(`${imgFile}`, import.meta.url).href;
  console.log(url);
  return url;
};
