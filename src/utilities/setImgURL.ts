function setImgURL(id: number) {
  return new URL(`/public/imgs/${id}.jpg`, import.meta.url).href;
}

export default setImgURL;
