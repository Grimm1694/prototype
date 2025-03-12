"use client";

import { Carousel } from "../components/ui/carousel";
import tc1 from "../../public/images/tc1.jpg";
import tc2 from "../../public/images/tc2.jpg";
import tc3 from "../../public/images/tc3.jpg";
import tc4 from "../../public/images/tc4.jpg";
import tc5 from "../../public/images/tc5.jpg";
import tc6 from "../../public/images/tc6.jpg";

// Optionally define your SlideData interface if not already defined elsewhere:
interface SlideData {
  title: string;
  button: string;
  src: string;
}

export default function PreviousHackathon() {
  const slideData: SlideData[] = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: tc1.src,
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: tc2.src,
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: tc3.src,
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: tc4.src,
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: tc5.src,
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: tc6.src,
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <h2 className="text-4xl font-bold text-center mb-8 border-hackathon-light-pink pb-4 text-hackathon-light-pink">
        TIME CAPSULE
      </h2>
      <Carousel slides={slideData} />
    </div>
  );
}
