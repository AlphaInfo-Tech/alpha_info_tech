import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import Services from "@/components/home/Services";
import ModelTeaser from "@/components/home/ModelTeaser";
import Voice2FillTeaser from "@/components/home/Voice2FillTeaser";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <ModelTeaser />
      <Voice2FillTeaser />
      <CtaBanner />
    </>
  );
}
