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
              title="Stop typing every form. Start serving more customers."
              description="Applicants speak Tamil, English or Tanglish on their own phone, and the form on your computer fills in English. Built for service centres that want to serve more people with the same staff."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/request-access">Start the Free Trial</Button>
              <Button href="/voice2fill" variant="secondary">
                See what it saves you
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
