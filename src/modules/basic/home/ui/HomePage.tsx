import * as React from "react";
import { Calendar1, Clock } from "lucide-react";
import RecentProjectsCard from "./elements/RecentProjectsCard";
import UpcomingEventsCard from "./elements/EventsCard";

export default function HomePage() {
  return (
    <main className="h-full w-full">
      <header className="h-full w-full flex flex-col gap-16 justify-center items-center">
        <h1 className="text-5xl mt-12 font-bold font-sans">Hello There! Vikas</h1>
        <section className="flex flex-col w-[80%] gap-4 justify-start items-start">
          <ProjectHeading />
          <RecentProjectsCard />
          <EventHeading />
          <UpcomingEventsCard />
        </section>
      </header>
    </main>
  );
}

function ProjectHeading() {
  return (
    <div className="flex justify-center items-center pl-2">
      <Clock size={16} color="#6a7282" />
      <h2 className="font-sans pl-2 font-medium text-gray-500">
        Recently Visited Projects
      </h2>
    </div>
  );
}
function EventHeading() {
  return (
    <div className="flex justify-center items-center mt-6 pl-2">
      <Calendar1 size={16} color="#6a7282" />
      <h2 className="font-sans pl-2 font-medium text-gray-500">
        Latest Events
      </h2>
    </div>
  );
}
