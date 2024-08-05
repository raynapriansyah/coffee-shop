import Image from "next/image";
import HeroImage from "/public/images/hero-image.jpg";

export default function Banner() {
  return (
    <div>
      <div>
        <Image src={HeroImage} alt="Hero image" className="w-full h-auto " />
      </div>
    </div>
  );
}
