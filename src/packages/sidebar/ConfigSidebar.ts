import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Settings2,
  Inbox,
  House,
  Brain,
  Search,
  MessageSquare,
  Mail,
  Folder,
  UserRoundPlus,
  Calendar,
  ReceiptText,
  Presentation,
  LayoutDashboard,
  Wallet,
} from "lucide-react";

export const sideBarLinks = {
  user: {
    name: "Vikas",
    email: "vikas@vecna.com",
    avatar:
      "https://www.upwork.com/profile-portraits/c1NmGFdbSs2QpPBH4HIs1fx4eK0XNy-jR9YLzZyP-Qz-tJ3zGFAQLfq9kEW8GHDBz_",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Project",
      url: "#",
      icon: Presentation,
      isActive: true,
      items: [
        {
          title: "All Projects",
          url: "#",
        },
        {
          title: "Discussion",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Analytics",
          url: "#",
        },
        {
          title: "Scripts",
          url: "#",
        },
        {
          title: "Video",
          url: "PR",
        },
        {
          title: "Thumbnail",
          url: "#",
        },
        {
          title: "SEO",
          url: "#",
        },
        {
          title: "PR",
          url: "#",
        },
        {
          title: "Revenue",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Teams",
          url: "#",
        },
        {
          title: "Permissions",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Revenue",
      url: "#",
      icon: Wallet,
      items: [
        {
          title: "Summary",
          url: "#",
        },
        {
          title: "Deals",
          url: "#",
        },
        {
          title: "Affiliate",
          url: "#",
        },
      ],
    },
  ],
  config: [
    {
      name: "Setting",
      url: "#",
      icon: Settings2,
      ready:false
    },
    {
      name: "Resources",
      url: "#",
      icon: Folder,
      ready:false
    },
    {
      name: "Invite User",
      url: "#",
      icon: UserRoundPlus,
      ready:false
    },
    {
      name: "Events",
      url: "#",
      icon: Calendar,
      ready:false
    },
    {
      name: "Billing",
      url: "#",
      icon: ReceiptText,
      ready:false
    },
  ],
  basic: [
    {
      name: "Search",
      url: "#",
      icon: Search,
      ready:false
    },
    {
      name: "Vecna AI",
      url: "#",
      icon: Brain,
      ready:false
    },
    {
      name: "Home",
      url: "/session/home",
      icon: House,
      ready:true
    },
    {
      name: "Chats",
      url: "/session/chat",
      icon: MessageSquare,
      ready:true
    },
    {
      name: "Email",
      url: "#",
      icon: Mail,
      ready:false
    },
    {
      name: "Inbox",
      url: "#",
      icon: Inbox,
      ready:false
    },
  ],
};

export type sideBarLinksType = typeof sideBarLinks;
