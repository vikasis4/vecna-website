import { FaWandMagicSparkles } from "react-icons/fa6";
import { PiProjectorScreenFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";

const navbarTrailLinks = [
  {
    label: "Features",
    href: "/",
    submenu: [
      {
        Icon: FaWandMagicSparkles,
        label: "AI Assistance",
        href: "/features/ai",
        comingSoon: false,
        desc: "Leverage AI-powered tools",
      },
      {
        Icon: PiProjectorScreenFill,
        label: "Projects",
        href: "/features/projects",
        comingSoon: false,
        desc: "Manage and track your projects",
      },
      {
        Icon: IoMail,
        label: "Mail",
        href: "/features/mails",
        comingSoon: true,
        desc: "Stay connected with built-in email",
      },
      {
        Icon: RiDashboardHorizontalFill,
        label: "Integration",
        href: "/features/integration",
        comingSoon: false,
        desc: "Seamlessly integrate your channel",
      },
      {
        Icon: FaCalendar,
        label: "Calendar",
        href: "/features/calendar",
        comingSoon: false,
        desc: "Events, schedule and reminders",
      },
    ],
  },
  {
    label: "Teams",
    href: "/",
    submenu: [
      {
        Icon: null,
        label: "Education",
        href: "/teams/education",
        comingSoon: false,
        desc: "",
      },
      {
        Icon: null,
        label: "Entertainment",
        href: "/teams/entertainment",
        comingSoon: false,
        desc: "",
      },
      {
        Icon: null,
        label: "Documentary",
        href: "/teams/documentary",
        comingSoon: false,
        desc: "",
      },
      {
        Icon: null,
        label: "Podcast",
        href: "/teams/podcast",
        comingSoon: false,
        desc: "",
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
    submenu: null,
  },
];

export default navbarTrailLinks;
