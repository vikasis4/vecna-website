import { FaUserFriends } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { SiPolymerproject } from "react-icons/si";
import { GrChannel } from "react-icons/gr";
import language from "@/language";
const {
  home: { sectionOne: CONST },
} = language;

export const secOneBoxData = [
  ["1", CONST.AI, FaWandMagicSparkles],
  ["2", CONST.CHANNELS, GrChannel],
  ["3", CONST.PROJECTS, SiPolymerproject],
  ["4", CONST.TEAMS, FaUserFriends],
];
