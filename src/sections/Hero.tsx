"use client";
import { FC } from "react";
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/button";

const Hero: FC = () => {
  const handleViewWorkClick = () => {
    const targetElement = document.querySelector("#about");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="bg-stone-200 font-sans">
      <div className="grid md:grid-cols-12 md:h-screen items-stretch">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0 ">
              Full-Stack Web Developer Story in Single Line
            </h1>
            <div className="flex flex-col mt-10 items-start gap-6"></div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="mt-20 md:mt-0 md:h-full">
            <img
              src={heroImage.src}
              alt="My Potrait"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
