const imagesLink = {
  logo: {
    src: "/logo.png",
    alt: "vecna logo",
  },
  // HERO SECTION IMAGES
  mrbeast: {
    src: "/hero/channels/mrbeast.webp",
    alt: "Mr Beast",
  },
  rankboost: {
    src: "/hero/channels/rankboost.png",
    alt: "RankBoost",
  },
  youtube: {
    src: "/hero/channels/youtube.png",
    alt: "Youtube",
  },
  beer: {
    src: "/hero/channels/beer.png",
    alt: "Beer Biceps",
  },
  hero: {
    src: "/hero/hero.png",
    alt: "vecna hero section",
  },
  // SECTION 1 IMAGES
  "sec-1-car-1":{
    src: "/hero/secone/img1.png",
    alt: "vecna hero section",
  },
  "sec-1-car-2":{
    src: "/hero/secone/img2.png",
    alt: "vecna hero section",
  },
  "sec-1-car-3":{
    src: "/hero/secone/img3.png",
    alt: "vecna hero section",
  },
  "sec-1-car-4":{
    src: "/hero/secone/img4.png",
    alt: "vecna hero section",
  }
};
export type imageType =
  | "logo"
  | "rankboost"
  | "youtube"
  | "beer"
  | "mrbeast"
  | "hero"
  | "sec-1-car-1"
  | "sec-1-car-2"
  | "sec-1-car-3"
  | "sec-1-car-4";
const getImageData = (type: imageType, h: number, w?: number) => ({
  ...imagesLink[type],
  height: h,
  width: w || h,
});

export default getImageData;
