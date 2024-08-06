import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react";

const navItems = [
  { name: "Discovery", href: "/" },
  { name: "About", href: "/" },
  { name: "Contact Us", href: "/" },
];

export default function Navbar() {
  return (
    <div className="md:container">
      <nav className="gap-x-6 font-bold w-full flex justify-between items-center px-8 py-4">
        <section>
          <h1>Coffee Daily</h1>
        </section>
        <section className="hidden md:flex md:justify-items-center md:gap-5 md:text-[14px]">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              {item.name}
            </Link>
          ))}
        </section>
        <section className="flex justify-items-center gap-4">
          <ShoppingCart />
          <span className="md:hidden">
            <Menu />
          </span>
        </section>
      </nav>
    </div>
  );
}
