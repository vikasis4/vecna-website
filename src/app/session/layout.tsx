import React from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import SidebarWorkspace from "@/packages/sidebar/ui/SidebarWorkspace";
import { SideBarBread } from "@/packages/breadcrumbs/BreadCrumbSidebar";
import { Separator } from "@/components/ui/separator";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <SidebarWorkspace />
        <SidebarInset>
          <section className="flex justify-start py-4 px-6 gap-4 items-center border">
            <SidebarTrigger />
            <Separator orientation="vertical" />
            <SideBarBread />
          </section>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default layout;
