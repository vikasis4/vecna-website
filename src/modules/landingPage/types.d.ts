export type carosoulNoType = "1" | "2" | "3" | "4";
export type landingPageTyep = {
  sectionone: {
    carosoulNo: carosoulNoType;
  };
};

import { IconType } from "react-icons";
export type itemDataType = [IconType, { title: string; desc: string }];