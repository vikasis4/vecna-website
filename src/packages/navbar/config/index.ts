import { FaWandMagicSparkles } from "react-icons/fa6";
import { PiProjectorScreenFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";
import language from "@/language";
const {
  nav: { trail: CONST },
} = language;

const navRoutes = [
  {
    label: CONST.features.label,
    href: "/",
    submenu: [
      {
        Icon: FaWandMagicSparkles,
        ...{ ...CONST.features.ai },
        href: "/features/ai",
        comingSoon: false,
      },
      {
        Icon: PiProjectorScreenFill,
        ...{ ...CONST.features.project },
        href: "/features/projects",
        comingSoon: false,
      },
      {
        Icon: IoMail,
        ...{ ...CONST.features.mail },
        href: "/features/mails",
        comingSoon: true,
      },
      {
        Icon: RiDashboardHorizontalFill,
        ...{ ...CONST.features.intigration },
        href: "/features/integration",
        comingSoon: false,
      },
      {
        Icon: FaCalendar,
        ...{ ...CONST.features.calendar },
        href: "/features/calendar",
        comingSoon: false,
      },
    ],
  },
  {
    label: CONST.teams.label,
    href: "/",
    submenu: [
      {
        Icon: null,
        label: CONST.teams.education,
        href: "/teams/education",
        comingSoon: false,
        desc: "",
      },
      {
        Icon: null,
        label: CONST.teams.entertainment,
        href: "/teams/entertainment",
        comingSoon: false,
        desc: "",
      },
      {
        Icon: null,
        label: CONST.teams.documentry,
        href: "/teams/documentary",
        comingSoon: false,
        desc: "",
      },
      {
        Icon: null,
        label: CONST.teams.podcast,
        href: "/teams/podcast",
        comingSoon: false,
        desc: "",
      },
    ],
  },
  {
    label: CONST.pricing.label,
    href: "/pricing",
    submenu: null,
  },
];

export default navRoutes;
