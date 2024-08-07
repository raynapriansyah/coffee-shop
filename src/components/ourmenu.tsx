import Image from "next/image";

import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { Button } from "./ui/button";

const MenuItems = [
  {
    image: "/images/menu/coffee-1.jpg",
    name: "Espresso",
    price: "3.00$",
  },
  {
    image: "/images/menu/coffee-2.jpg",
    name: "Latte",
    price: "3.50$",
  },
  {
    image: "/images/menu/coffee-3.jpg",
    name: "Cappuccino",
    price: "3.50$",
  },
  {
    image: "/images/menu/coffee-4.jpg",
    name: "Americano",
    price: "2.80$",
  },
  {
    image: "/images/menu/coffee-5.jpg",
    name: "Macchiato",
    price: "3.20$",
  },
  {
    image: "/images/menu/coffee-6.jpg",
    name: "Mocha",
    price: "3.80$",
  },
  {
    image: "/images/menu/coffee-7.jpg",
    name: "Flat White",
    price: "3.30$",
  },
  {
    image: "/images/menu/coffee-8.jpg",
    name: "Cold Brew",
    price: "4.00$",
  },
];

export default function OurMenu() {
  return (
    <section className="w-full mt-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Menu&apos;s</h1>
        <p className="text-sm">Order it for you or for your beloved ones</p>
      </div>
      <div className="container flex justify-center p-8">
        <Carousel>
          <CarouselContent className="flex flex-wrap">
            {MenuItems.map((item) => (
              <CarouselItem key={item.name} className="basis-1/2 lg:basis-1/4">
                <div className="md:p-2 flex items-center">
                  <Card className="shadow-md mb-4">
                    <Image
                      src={item.image}
                      width={800}
                      height={800}
                      alt=""
                      className="w-full rounded-t-md"
                    />
                    <CardContent className="md:mt-3 flex flex-col justify-center items-center">
                      <p className="font-bold text-[14px] md:text-md">
                        {item.name}
                      </p>
                      <p className="text-[14px] md:text-md md:text-right text-green-600 font-bold">
                        {item.price}
                      </p>
                      <Button className="w-full mt-4 bg-primary">Order</Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
