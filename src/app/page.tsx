import OurMenu from "~/components/ourmenu";
import Hero from "./hero";
import Navbar from "./navbar";
import About from "~/components/about";
import Testimonials from "~/components/testimonials";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <Navbar />

      <OurMenu />
      <About />
      <Testimonials />
    </div>
  );
}
