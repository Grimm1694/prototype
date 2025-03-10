"use client";

import { Carousel } from "../components/ui/carousel";
import tc1 from "../../public/images/tc1.jpg";
import tc2 from "../../public/images/tc2.jpg";
import tc3 from "../../public/images/tc3.jpg";
import tc4 from "../../public/images/tc4.jpg";
import tc5 from "../../public/images/tc5.jpg";
import tc6 from "../../public/images/tc6.jpg";

export default function PreviousHackton() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: tc1,
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: tc2,
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: tc3,
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: tc4,
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: tc5,
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: tc6,
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <h2 className="text-4xl font-bold text-center mb-8 border-hackathon-light-pink pb-4 text-hackathon-light-pink">
        Time Capsule
      </h2>
      <Carousel slides={slideData} />
    </div>
  );
}
