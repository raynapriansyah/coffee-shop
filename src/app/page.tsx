import OurMenu from "~/components/ourmenu";
import Hero from "./hero";
import Navbar from "./navbar";

export default function HomePage() {
  return (
    <div className="">
      <Navbar />
      <Hero />

      <section>
        <OurMenu />
      </section>
    </div>
  );
}
