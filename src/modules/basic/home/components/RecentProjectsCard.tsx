import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {  ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function RecentProjectsCard() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full h-max"
    >
      <CarouselContent>
        {projects.map(
          ({ title, description, img, status, priority, link }, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 h-max"
            >
              <div className="p-1">
                <Card>
                  <CardHeader>
                    <section className="flex justify-between items-start pb-2">
                      <div className="flex justify-center items-center gap-2">
                        <Badge variant={status}>{status}</Badge>
                        <Badge variant="outline">{priority}</Badge>
                      </div>
                      <Link href={link}>
                        <ExternalLink className="cursor-pointer" size={18} />
                      </Link>
                    </section>
                    <CardTitle className="truncate">{title}</CardTitle>
                    <CardDescription className="truncate">
                      {description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center">
                    <div className="w-full aspect-[16/9] overflow-hidden rounded-sm">
                      <Image
                        src={img}
                        alt="project image"
                        className="w-full h-full object-cover"
                        width={200}
                        height={200}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default RecentProjectsCard;

type projectType = {
  title: string;
  description: string;
  img: string;
  status: "Terminated" | "Completed" | "In-Progress" | "Draft";
  priority: "low" | "medium" | "high";
  link: string;
};

const projects: projectType[] = [
  {
    title: "Smart Home App",
    description: "A mobile app to control and automate home devices.",
    img: "https://imgs.search.brave.com/CZSfDHesgYSV_1L0HdQIsB5PxnBzwerMfdOhaiAdLnw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFHVWRu/SHhDcTQvMS8wLzE2/MDB3L2NhbnZhLW1v/ZGVybi1kYWlseS1w/b2RjYXN0LXlvdXR1/YmUtdGh1bWJuYWls/LXJZREQyeURqZXA0/LmpwZw",
    status: "In-Progress",
    priority: "high",
    link: "https://smarthomeapp.com",
  },
  {
    title: "E-Commerce Dashboard",
    description: "Admin dashboard for managing products, orders, and users.",
    img: "https://imgs.search.brave.com/N1xuNLIRda5yVVgC0gWayP7ySt8WolnzUqoMEbgLc1A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dXNjcmVlbi50di93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/My9wb2RjYXN0LWV2/ZW50LXlvdXR1YmUt/dmlkZW8tdGh1bWJu/YWlsLWV4YW1wbGUu/anBlZw",
    status: "Completed",
    priority: "medium",
    link: "https://ecom-dashboard.com",
  },
  {
    title: "Travel Booking Website",
    description: "A responsive website for booking flights and hotels.",
    img: "https://imgs.search.brave.com/juscEMS46c_eMeNiJhHOtAhNToPX9hbBvllkHGpills/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGdDhR/QzNvNGMvMS8wLzE2/MDB3L2NhbnZhLW1p/bmltYWwtYWVzdGhl/dGljLW1hbmFsaS10/b3VyaXNtLXlvdXR1/YmUtdGh1bWJuYWls/LTV4eUNpYTBScUtV/LmpwZw",
    status: "Terminated",
    priority: "high",
    link: "https://travelbooker.com",
  },
  {
    title: "AI Chatbot",
    description: "An AI-powered chatbot for customer service automation.",
    img: "https://imgs.search.brave.com/Ind_1i5M0EFxTJqQkAyKk6fMb29bFR8kWNAf_k5SkUQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGX01E/THVBbDgvMy8wLzE2/MDB3L2NhbnZhLWdy/ZWVuLXBhc3NpdmUt/aW5jb21lLWlkZWFz/LXlvdXR1YmUtdGh1/bWJuYWlsLWllWlZs/YUIwSjVBLmpwZw",
    status: "Draft",
    priority: "low",
    link: "https://aibotservice.com",
  },
  {
    title: "Fitness Tracker",
    description: "An app to track workouts, calories, and progress.",
    img: "https://imgs.search.brave.com/2DWRAm_yb_y_7t0JPNAqMbhNlDPwo6-CQ_VtoiMzG24/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dXNjcmVlbi50di93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/My9hbWF6aW5nLXlv/dXR1YmUtdGh1bWJu/YWlsLWlkZWFzLTEw/NTB4NjAwLmpwZw",
    status: "Terminated",
    priority: "medium",
    link: "https://fittrackapp.com",
  },
];
