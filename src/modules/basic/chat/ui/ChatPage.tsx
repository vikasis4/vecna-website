"use client";
import SessionLayout from "@/components/ui/SessionLayout";
import { UserChatCard } from "@/modules/basic/chat/ui/elements/UserChatCard";
import { ChatBox } from "@/packages/chat/ui/ChatBox";
import React from "react";

const data = [
  {
    color: "green",
    description: "What's the update on our project?",
    Icon: "https://www.upwork.com/profile-portraits/c1NmGFdbSs2QpPBH4HIs1fx4eK0XNy-jR9YLzZyP-Qz-tJ3zGFAQLfq9kEW8GHDBz_",
    name: "Vikas",
    time: "12m ago",
    key: "123",
  },
  {
    color: "blue",
    description: "Welcome to the platform! Let us know if you need help.",
    Icon: "",
    name: "Anjali",
    time: "25m ago",
    key: "124",
  },
  {
    color: "red",
    description: "You have a pending message from support.",
    Icon: "",
    name: "Rahul",
    time: "1h ago",
    key: "125",
  },
  {
    color: "purple",
    description: "Your subscription has been updated successfully.",
    Icon: "",
    name: "Sanya",
    time: "2h ago",
    key: "126",
  },
  {
    color: "gold",
    description: "Reminder: Meeting scheduled for tomorrow at 10 AM.",
    Icon: "",
    name: "Aman",
    time: "3h ago",
    key: "127",
  },
];

function ChatPage() {
  return (
    <SessionLayout>
      <main className="flex justify-center items-start gap-4 h-full">
        <section className="w-full h-full">
          <ChatBox />
        </section>
        <section className="flex flex-col gap-2">
          {data.map((user) => (
            <UserChatCard key={user.key} data={user} />
          ))}
        </section>
      </main>
    </SessionLayout>
  );
}

export default ChatPage;
