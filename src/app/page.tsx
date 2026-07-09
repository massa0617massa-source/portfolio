import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Service from "@/components/sections/Service";
import Works from "@/components/sections/Works";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="px-6 md:px-12">
      <Hero />
      <About />
      <Service />
      <Works />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
