import React from "react";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import SidebarWorkspace from "@/packages/sidebar/ui/SidebarWorkspace";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <SidebarWorkspace />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default layout;
