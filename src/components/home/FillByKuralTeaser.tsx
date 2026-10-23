import Image from "next/image";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { Button } from "../Button";

export default function FillByKuralTeaser() {
  return (
    <section className="bg-surface py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="New · Fill by Kural"
              title="Fill web forms by speaking Tamil or English"
              description="Scan a QR code, tap the mic on your phone and say the answers. They appear in the form on your computer as you speak. Built for service centres and anyone tired of typing."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/request-access">Request Access</Button>
              <Button href="/fill-by-kural" variant="secondary">
                See how it works
              </Button>
            </div>
          </div>
          <Image
            src="/fill-by-kural/promo-marquee.png"
            alt="Fill by Kural: speak in Tamil or English on your phone and the form on your computer fills itself."
            width={1400}
            height={560}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full rounded-2xl shadow-xl"
          />
        </div>
      </Container>
    </section>
  );
}
