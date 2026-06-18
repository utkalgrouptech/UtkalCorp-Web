import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Industries from "@/components/home/Industries";
import Services from "@/components/home/Services";
import Strtbr from "@/components/home/StatsBar";
import TrustedClients from "@/components/home/Clients";
export default function Home() {
  return (
    <>
      <Hero />
       <About />
       <Industries />
       <Services />
       <Strtbr/>
       <TrustedClients />
    </>
  );
}