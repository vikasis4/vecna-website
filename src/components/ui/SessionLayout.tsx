import React, { ReactNode } from "react";

function SessionLayout({ children }: { children: ReactNode }) {
  return <main className="bg-sidebar p-8 h-[calc(100vh-28px)]">{children}</main>;
}

export default SessionLayout;
