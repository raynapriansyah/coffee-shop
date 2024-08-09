import Image from "next/image";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Quote } from "lucide-react";

const AboutItems = [
  {
    image: "/images/about/about-image.jpg",
    name: "About Us",
    description:
      "Coffee Section was born out of a passion for exceptional coffee and a desire to create a community space where people can unwind, connect, and enjoy the simple pleasures of life. Our journey began with a commitment to quality, sustainability, and a love for the craft of coffee making.",
  },
  {
    image: "/images/about/coffee-image.jpg",
    name: "Our Coffee",
    description:
      "At Coffee Section, we believe that great coffee starts with great beans. We source our coffee beans from the finest farms around the world, ensuring that each bean is ethically grown and harvested. Our expert baristas take pride in brewing each cup with precision, using state-of-the-art equipment and time-honored techniques. Whether you prefer a robust espresso, a creamy latte, or a refreshing cold brew, we have something to satisfy every palate.",
  },
];

export default function About() {
  return (
    <div className="bg-[#E7F0DC] justify-center items-center p-10 md:p-20">
      <Carousel>
        <CarouselContent>
          {AboutItems.map((item) => (
            <CarouselItem key={item.name}>
              <h1 className="text-4xl font-bold">{item.name}</h1>
              <div className="md:flex md:flex-row space-y-16 md:space-y-8 md:gap-8 justify-between items-center mt-12 lg:p-24">
                <section>
                  <Image
                    priority
                    src={item.image}
                    height={600}
                    width={600}
                    alt=""
                    className="rounded-md"
                  />
                </section>
                <section className="md:w-[600px] font-semibold text-justify italic md:text-xl space-y-16 flex flex-col items-center">
                  <span>
                    <Quote size={50} />
                  </span>
                  <span>{item.description}</span>
                </section>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
