import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactNumbers from "@/components/ImpactNumbers";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ImpactNumbers />
      <Process />
      <Testimonials />
      <CtaSection />
      <FloatingContact />
    </main>
  );
}
