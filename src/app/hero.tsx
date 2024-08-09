import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "~/components/ui/button";

export default function Hero() {
  return (
    <div>
      <Image
        priority
        src="/images/hero-image.jpg"
        alt="hero image"
        height={1350}
        width={2400}
        className="h-[600px] object-none object-[60%] lg:h-auto lg:object-none lg:object-center w-full"
      />
      <div className="absolute xl:top-4 top-32 md:-top-32 lg:top-0 sm:h-[400px] lg:h-[400px] xl:h-[600px] sm:mt-12 sm:py-12 mx-8 md:mt-40 lg:py-6 lg:mt-12 xl:translate-x-30 xl:mt-44 sm:w-[50%]">
        <div className="flex justify-center items-center sm:justify-start sm:items-left">
          <Image
            src="/images/image-cup.png"
            height={200}
            width={200}
            alt=""
            className="sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px]"
          />
        </div>

        <div className="container flex-col">
          <h1 className="text-black/50 text-2xl sm:text-5xl xl:text-6xl md:text-4xl font-bold uppercase text-center sm:text-left">
            Coffee
          </h1>
          <h1 className="text-[#A28B55] text-2xl sm:text-6xl xl:text-7xl font-bold md:text-4xl uppercase text-center sm:text-left">
            Section
          </h1>
          <p className="text-black/50 mt-12 text-sm md:text-md text-justify font-semibold">
            Coffee Corner was born out of a passion for exceptional coffee and a
            desire to create a community space where people can unwind, connect,
            and enjoy the simple pleasures of life.
          </p>
          <section className="hidden sm:block mt-8 md:flex md:flex-row">
            <div className="text-black/50 font-bold mr-2">Contact Us |</div>
            <div className="flex flex-row gap-2 items-center">
              <Link href="#">
                <Facebook size={23} className="text-[#A28B55]" />
              </Link>
              <Link href="#">
                <Instagram size={23} className="text-[#A28B55]" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
