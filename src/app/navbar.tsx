import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

const navItems = [
  { name: "Discovery", href: "/" },
  { name: "About", href: "/" },
  { name: "Menu", href: "/" },
];

export default function Navbar() {
  return (
    <div>
      <nav className="absolute top-4 gap-x-6 font-bold w-full flex justify-between items-center px-6 sm:px-16 py-4">
        <section>
          <h1>COFFEE SECTION</h1>
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

          {/* nav Hamburger */}
          <span className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="flex flex-col gap-4 mt-8">
                    <h1>COFFEE SECTION</h1>
                    {navItems.map((item) => (
                      <Link key={item.name} href={item.href}>
                        {item.name}
                      </Link>
                    ))}
                  </SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </span>
        </section>
      </nav>
    </div>
  );
}
