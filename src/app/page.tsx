import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Calculator from "@/components/Calculator";
import Services from "@/components/Services";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Calculator />
        <Services />
      </main>
      <WhatsAppButton />
    </>
  );
}
