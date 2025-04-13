import SessionLayout from "@/components/ui/SessionLayout";
import { chatDemoData } from "@/modules/basic/chat/chatDemoData";
import { UserChatCard } from "@/modules/basic/chat/components/UserChatCard";
import { ChatBox } from "@/packages/chat/ui/ChatBox";
import React from "react";

function page() {
  return (
    <SessionLayout>
      <main className="flex justify-center items-start gap-4 h-full">
        <section className="w-full h-full">
          <ChatBox />
        </section>
        <section className="flex flex-col gap-2">
          {chatDemoData.map((user) => (
            <UserChatCard key={user.key} data={user} />
          ))}
        </section>
      </main>
    </SessionLayout>
  );
}

export default page;
