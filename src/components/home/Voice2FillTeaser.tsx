import Image from "next/image";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { Button } from "../Button";

export default function Voice2FillTeaser() {
  return (
    <section className="bg-surface py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="New · Voice2Fill"
              title="Fill web forms by speaking Tamil or English"
              description="Scan a QR code, tap the mic on your phone and say the answers. They appear in the form on your computer as you speak. Built for service centres and anyone tired of typing."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/request-access">Request Access</Button>
              <Button href="/voice2fill" variant="secondary">
                See how it works
              </Button>
            </div>
          </div>
          <Image
            src="/voice2fill/promo-tile.png"
            alt="Voice2Fill: speak. It fills. A microphone sends your answers from the phone to a form."
            width={440}
            height={280}
            className="mx-auto h-auto w-full max-w-[440px] rounded-2xl shadow-xl lg:mr-0"
          />
        </div>
      </Container>
    </section>
  );
}
