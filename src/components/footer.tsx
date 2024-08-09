import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-[#222831] w-full">
      <div className="container flex flex-col md:flex-row justify-start md:justify-between border-t-4">
        <div className="text-white p-4 hidden md:block">
          <Image
            src="/images/image-cup.png"
            alt=""
            width={100}
            height={100}
            className=""
          />
          <h1 className="font-bold sm:text-sm lg:text-2xl">COFFEE SECTION</h1>
          <p className="text-sm">born out of a passion for exceptional</p>
          <p className="text-sm">happy coffee</p>
        </div>
        <div className="text-white flex flex-col justify-start md:flex-row gap-8 md:space-x-20 py-4 mr-4 mt-8">
          <div className="text-sm lg:text-md">
            <ul className="space-y-6">
              <li className="text-green-700 font-bold">
                <Link href="">Discovery</Link>
              </li>
              <li>
                <Link href="">New Season</Link>
              </li>
              <li>
                <Link href="">Most Searched</Link>
              </li>
              <li>
                <Link href="">Most Selled</Link>
              </li>
            </ul>
          </div>
          <div className="text-sm lg:text-md">
            <ul className="space-y-6">
              <li className="text-green-700 font-bold border-b-2 md:border-none">
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">Help</Link>
              </li>
              <li>
                <Link href="">Shipping</Link>
              </li>
              <li>
                <Link href="">Affiliate</Link>
              </li>
            </ul>
          </div>
          <div className="text-sm lg:text-md">
            <ul className="space-y-6">
              <li className="text-green-700 font-bold border-b-2 md:border-none">
                <Link href="">Info</Link>
              </li>
              <li>
                <Link href="">Contact us</Link>
              </li>
              <li>
                <Link href="">Privacy Policies</Link>
              </li>
              <li>
                <Link href="">Terms & Condition</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full p-4 bg-white flex justify-center items-center mt-10">
        <h1 className="text-sm lg:text-md">
          <span className="font-bold">©️Coffee Section</span> All Rights
          Reserved.
        </h1>
      </div>
    </section>
  );
}
