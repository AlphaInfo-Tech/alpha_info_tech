import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import Services from "@/components/home/Services";
import ModelTeaser from "@/components/home/ModelTeaser";
import FillByKuralTeaser from "@/components/home/FillByKuralTeaser";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <ModelTeaser />
      <FillByKuralTeaser />
      <CtaBanner />
    </>
  );
}
