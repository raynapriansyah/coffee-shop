import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <Image
        src="/images/hero-image.jpg"
        alt="hero image"
        height={1350}
        width={2400}
        className="absolute h-screen lg:h-auto object-none object-center"
      />
      <div className="absolute bg-black/60 h-[600px] lg:h-[400px] xl:h-[600px] mt-12 py-12 mx-8 md:mt-40 lg:py-6 xl:py-24 lg:mt-12 xl:translate-x-72 xl:mt-44 xl:w-[70%]">
        <div className="container flex justify-center items-center flex-col space-y-12 md:space-y-20">
          <h1 className="text-white text-5xl xl:text-7xl font-bold uppercase">
            Welcome
          </h1>
          <h1 className="text-white text-3xl xl:text-7xl font-bold uppercase text-center">
            Coffee Daily for Everyone
          </h1>
          <p className="text-white text-sm md:text-lg text-justify">
            Coffee Daily was born out of a passion for exceptional coffee and a
            desire to create a community space where people can unwind, connect,
            and enjoy the simple pleasures of life. Our journey began with a
            commitment to quality, sustainability, and a love for the craft of
            coffee making.
          </p>
        </div>
      </div>
    </div>
  );
}
