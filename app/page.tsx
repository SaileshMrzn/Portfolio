import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-screen">
        <FloatingNav navItems={[{ name: "Home", link: "/" }]} />
        <Hero />
        {/* <AuroraBackgroundDemo /> */}
        {/* <Grid /> */}
        <Technologies />
        <Cards />
      </div>
    </main>
  );
}
