import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import Services from "@/components/Services";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Calculator />
      <Services />
      <WhatsAppButton />
    </main>
  );
}
