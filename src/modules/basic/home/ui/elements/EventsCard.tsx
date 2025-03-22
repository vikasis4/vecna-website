import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { Calendar, ExternalLink } from "lucide-react";
  import { Badge } from "@/components/ui/badge";
  import Link from "next/link";
  
  function UpcomingEventsCard() {
    return (
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full h-max"
      >
        <CarouselContent>
          {events.map(({ title, description, date, status, link }, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-max mb-12">
              <div className="p-1">
                <Card>
                  <CardHeader>
                    <section className="flex justify-between items-start pb-2">
                      <div className="flex justify-center items-center gap-2">
                        <Badge variant={status === "Cancelled" ? "destructive" : "default"}>
                          {status}
                        </Badge>
                      </div>
                      <Link href={link}>
                        <ExternalLink className="cursor-pointer" size={18} />
                      </Link>
                    </section>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{date}</span>
                    </div>
                    <CardTitle className="truncate">{title}</CardTitle>
                    <CardDescription className="truncate">{description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }
  
  export default UpcomingEventsCard;
  
  // Event type
  type eventType = {
    title: string;
    description: string;
    date: string; // e.g., "April 25, 2025"
    status: "Upcoming" | "Cancelled" | "Postponed";
    link: string;
  };
  
  // Dummy data
  const events: eventType[] = [
    {
      title: "Tech Conference 2025",
      description: "Join top tech leaders and innovators from around the world.",
      date: "April 25, 2025",
      status: "Upcoming",
      link: "https://techconference2025.com",
    },
    {
      title: "Startup Pitch Day",
      description: "Pitch your ideas to global investors and VCs.",
      date: "May 10, 2025",
      status: "Postponed",
      link: "https://startuppitchday.com",
    },
    {
      title: "AI & ML Workshop",
      description: "Hands-on workshop on AI and Machine Learning trends.",
      date: "June 5, 2025",
      status: "Cancelled",
      link: "https://aimlworkshop.com",
    },
    {
      title: "E-commerce Summit",
      description: "Discover strategies to boost your online business.",
      date: "July 15, 2025",
      status: "Upcoming",
      link: "https://ecommercesummit.com",
    },
  ];
  