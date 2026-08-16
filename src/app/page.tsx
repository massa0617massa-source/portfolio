import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Works from "@/components/sections/Works";
import Service from "@/components/sections/Service";
import Vision from "@/components/sections/Vision";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="px-6 md:px-12">
      <Hero />
      <About />
      <Works />
      <Service />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}
