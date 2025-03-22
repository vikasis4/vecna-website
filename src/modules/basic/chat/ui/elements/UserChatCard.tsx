"use client";

import { cn } from "@/lib/utils";
import { User2 } from "lucide-react";
import Image from "next/image";

interface Item {
  name: string;
  description: string;
  Icon: string;
  color: string;
  time: string;
}

export const UserChatCard = ({ data }: { data: Item }) => {
  const { name, description, Icon, color, time } = data;
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        {Icon ? (
          <Image
            height={20}
            width={20}
            className="size-10 rounded-2xl"
            src={Icon}
            alt="user image"
          />
        ) : (
          <div
            className="flex size-10 items-center justify-center rounded-2xl"
            style={{
              backgroundColor: color,
            }}
          >
            <User2 className="text-lg text-white  " />
          </div>
        )}
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-md">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-black/80 truncate dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};
