"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SidebarWorkNav } from "./elements/SidebarWorkNav.tsx";
import { SidebarWorkTeam } from "./elements/SidebarNavTeam";
import { SidebarWorkCMNav } from "./elements/SidebarWorkCMNav";
import { SidebarWorkUser } from "./elements/SidebarNavUser";
import { sideBarLinks as data } from "../sideBarConfig";

export default function SidebarWorkspace({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarWorkTeam teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarWorkCMNav title="Basic" projects={data.basic} />
        <SidebarWorkNav items={data.navMain} />
        <SidebarWorkCMNav title="Config" projects={data.config} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarWorkUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
