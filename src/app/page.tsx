import OurMenu from "~/components/ourmenu";
import Hero from "./hero";
import Navbar from "./navbar";
import About from "~/components/about";

export default function HomePage() {
  return (
    <div className="">
      <Navbar />
      <Hero />

      <OurMenu />
      <About />
    </div>
  );
}
