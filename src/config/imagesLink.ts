const imagesLink = {
  logo: {
    src: "/logo.png",
    alt: "vecna logo",
  },
};
type imageType = "logo";
const getImageData = (type: imageType, h: number, w?: number) => ({
  ...imagesLink[type],
  height: h,
  width: w || h,
});

export default getImageData;
