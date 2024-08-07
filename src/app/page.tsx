import OurMenu from "~/components/ourmenu";
import Hero from "./hero";
import Navbar from "./navbar";
import About from "~/components/about";
import Testimonials from "~/components/testimonials";

export default function HomePage() {
  return (
    <div className="">
      <Navbar />
      <Hero />

      <OurMenu />
      <About />
      <Testimonials />
    </div>
  );
}
