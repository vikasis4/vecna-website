"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SidebarWorkNav } from "./elements/SidebarWorkNav.tsx";
import { SidebarWorkTeam } from "./elements/SidebarNavTeam";
import { SidebarWorkCMNav } from "./elements/SidebarWorkCMNav";
import { SideNavUser } from "./elements/SidebarNavUser";
import { sideBarLinks as data } from "../ConfigSidebar";

export default function SidebarWorkspace({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarWorkTeam teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="scrollbar-hide ">
        <SidebarWorkCMNav title="Basic" projects={data.basic} />
        <SidebarWorkNav items={data.navMain} />
        <SidebarWorkCMNav title="Config" projects={data.config} />
      </SidebarContent>
      <SidebarFooter>
        <SideNavUser user={data.user} />
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
