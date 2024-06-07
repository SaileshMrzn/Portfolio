import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import About from "@/components/About";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import Footer from "@/components/Footer";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-screen">
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <AuroraBackgroundDemo /> */}
        {/* <Gr>i>d /> */}
        <About />
        <Technologies />
        <Cards />
        <Footer />
      </div>
    </main>
  );
}
