import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Service from "@/components/sections/Service";
import Works from "@/components/sections/Works";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="px-12">
      <Hero />
      <About />
      <Service />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}
