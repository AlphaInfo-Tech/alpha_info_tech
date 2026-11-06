import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { existsSync } from "node:fs";
import path from "node:path";
import { ReactNode } from "react";
import Container from "@/components/Container";
import { Button } from "@/components/Button";
import { LegalTable } from "@/components/LegalLayout";
import { company, voice2Fill } from "@/lib/content";

// How to use page (Tanglish: Tamil script, with English words such as Phone,
// QR, form, scan and every button name written in English, as people say them
// at the counter). Button names are the app's exact words, in bold: if a
// button is renamed in the extension, change it here too. Plan counters and
// minutes must match Admin → Plans. Never describe a plan as a number of forms.

export const metadata: Metadata = {
  title: "How to Use Voice2Fill",
  description:
    "Voice2Fill எப்படி use பண்றது: Chrome, Edge-ல extension install, QR scan, voice, Typing only, Phone-ல photo, Fetch from scan, QR for other, Tamil typing, plan counters, privacy. Step by step, in Tamil.",
};

const whatsappHref = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`;

// Posters come from the "Voice2Fill feature, how-to-use and training posters"
// artifact. U = how-to-use (16:9, 1920×1080), T = training (A4, 2480×3508).
// Export each one as a PNG into public/voice2fill/posters/ under the name
// below; a poster shows on the page once its file is there.
const posters = {
  U1: { file: "u01.png", title: "Fill a form by voice" },
  U2: { file: "u02.png", title: "Typing only" },
  U3: { file: "u03.png", title: "Photo or document from the phone" },
  U4: { file: "u04.png", title: "Fetch from scan" },
  U5: { file: "u05.png", title: "QR for other" },
  U6: { file: "u06.png", title: "Customer answers waiting" },
  U7: { file: "u07.png", title: "Tamil typing on the phone" },
  U8: { file: "u08.png", title: "Tamil typing on this computer's mic" },
  U9: { file: "u09.png", title: "Next customer, closed phone page" },
  U10: { file: "u10.png", title: "Several forms at once" },
  T1: { file: "t01.png", title: "Your first day" },
  T2: { file: "t02.png", title: "What's in the popup" },
  T3: { file: "t03.png", title: "What the colours mean" },
  T4: {
    file: "t04.png",
    title: "Tell the customer before handing over the phone",
  },
  T5: { file: "t05.png", title: "Fixing a wrong answer" },
  T6: { file: "t06.png", title: "When something goes wrong" },
  T7: { file: "t07.png", title: "What uses your plan" },
  T8: { file: "t08.png", title: "Keeping customers' details safe" },
  T9: { file: "t09.png", title: "Do and don't" },
} as const;

type PosterId = keyof typeof posters;

function Poster({ id }: { id: PosterId }) {
  const poster = posters[id];
  const src = `/voice2fill/posters/${poster.file}`;
  if (!existsSync(path.join(process.cwd(), "public", src))) return null;

  const training = id.startsWith("T");
  return (
    <figure className={training ? "mx-auto max-w-sm" : undefined}>
      <a href={src} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          alt={`Voice2Fill poster ${id}: ${poster.title}`}
          width={training ? 2480 : 1920}
          height={training ? 3508 : 1080}
          sizes={training ? "384px" : "(min-width: 1024px) 896px, 100vw"}
          className="h-auto w-full rounded-xl border border-black/10 shadow-lg"
        />
      </a>
      {training && (
        <figcaption className="mt-2 text-center text-xs text-ink-muted">
          A4 poster: click to open and print
        </figcaption>
      )}
    </figure>
  );
}

const sections: {
  id: string;
  title: string;
  poster?: PosterId;
  body: ReactNode;
}[] = [
  {
    id: "install",
    title: "Extension install பண்றது (Chrome, Edge)",
    body: (
      <>
        <p>
          Voice2Fill-ஐ use பண்றதுக்கு முன்னாடி, form fill பண்ற computer-ல
          ஒரு தடவை மட்டும் extension install பண்ணுங்க. Google Chrome அல்லது
          Microsoft Edge, ரெண்டுலயும் வேலை செய்யும். Browser latest version-ல
          இருக்கணும்.
        </p>
        <p>
          {voice2Fill.storeUrl ? (
            <>
              Install link:{" "}
              <a
                href={voice2Fill.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voice2Fill on the Chrome Web Store
              </a>
              . Chrome-க்கும் Edge-க்கும் இதே link தான்.
            </>
          ) : (
            <>
              Account ready ஆனதும் Chrome Web Store link-ஐ WhatsApp-ல
              அனுப்புவோம். Chrome-க்கும் Edge-க்கும் இதே link தான். Link
              கிடைக்கலையா?{" "}
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp {company.whatsapp}
              </a>
            </>
          )}
        </p>

        <h3>Google Chrome-ல</h3>
        <ol>
          <li>
            Chrome-ல Voice2Fill Chrome Web Store link-ஐ open பண்ணுங்க.
          </li>
          <li>
            <strong>Add to Chrome</strong> click பண்ணுங்க.
          </li>
          <li>
            &quot;Add Voice2Fill?&quot;ன்னு ஒரு சின்ன window வரும்.{" "}
            <strong>Add extension</strong> click பண்ணுங்க.
          </li>
          <li>
            Toolbar-ல puzzle icon (<strong>Extensions</strong>) click பண்ணி,
            Voice2Fill பக்கத்துல இருக்கிற pin icon-ஐ click பண்ணுங்க. இப்போ
            Voice2Fill icon toolbar-லயே எப்பவும் தெரியும்.
          </li>
        </ol>

        <h3>Microsoft Edge-ல</h3>
        <ol>
          <li>Edge-ல அதே Chrome Web Store link-ஐ open பண்ணுங்க.</li>
          <li>
            Page மேல ஒரு banner வரும். முதல் தடவை மட்டும்{" "}
            <strong>Allow extensions from other stores</strong> click பண்ணி,
            அடுத்து வர்ற window-ல <strong>Allow</strong> click பண்ணுங்க.
          </li>
          <li>
            <strong>Get</strong> (சில நேரம் <strong>Add to Chrome</strong>னு
            இருக்கும்) click பண்ணுங்க.
          </li>
          <li>
            &quot;Add Voice2Fill to Microsoft Edge?&quot; window-ல{" "}
            <strong>Add extension</strong> click பண்ணுங்க.
          </li>
          <li>
            Toolbar-ல puzzle icon (<strong>Extensions</strong>) click பண்ணி,
            Voice2Fill பக்கத்துல இருக்கிற கண் icon (
            <strong>Show in toolbar</strong>) click பண்ணுங்க.
          </li>
        </ol>

        <p>
          Install ஆனதும் toolbar-ல Voice2Fill icon click பண்ணுங்க, popup open
          ஆகும். அடுத்து கீழ இருக்கிற &quot;முதல் நாள்&quot; steps-ல sign in
          பண்ணுங்க. இந்த page-ல &quot;Chrome&quot;னு சொல்ற எல்லா இடத்திலயும்
          Edge-லயும் அதே மாதிரி தான்.
        </p>
        <p>
          Customer Phone-ல எதுவும் install பண்ண தேவையில்ல. Extension உங்க
          computer-ல மட்டும் தான்.
        </p>
      </>
    ),
  },
  {
    id: "first-day",
    title: "முதல் நாள்",
    poster: "T1",
    body: (
      <ol>
        <li>
          <strong>Sign in:</strong> Extension popup-ல உங்க Phone number, PIN
          போடுங்க. இது உங்க administrator தருவாங்க.
        </li>
        <li>
          <strong>Pin பண்ணுங்க:</strong> Chrome toolbar-ல puzzle icon →
          Voice2Fill பக்கத்துல pin. அப்போ icon எப்பவும் கண்ணுக்கு தெரியும்.
        </li>
        <li>
          <strong>Site-ஐ ஒரு தடவை Allow பண்ணுங்க:</strong> ஒரு website-ல முதல்
          தடவை use பண்ணும்போது Chrome கேக்கும். <strong>Allow</strong> click
          பண்ணுங்க. நீங்க <strong>QR for this page</strong> click பண்ற வரைக்கும்
          Voice2Fill அந்த site-ல எதுவும் படிக்காது.
        </li>
        <li>
          <strong>Minutes பாருங்க:</strong> Popup header-ல இருக்கிற chip
          (உதாரணம்: &quot;386 min left&quot;) உங்க plan-ல மீதி இருக்கிற voice
          minutes-ஐ காட்டும்.
        </li>
      </ol>
    ),
  },
  {
    id: "popup",
    title: "Popup-ல என்ன இருக்கு",
    poster: "T2",
    body: (
      <LegalTable
        head={["பகுதி", "என்ன சொல்லுது"]}
        rows={[
          [
            <>மஞ்சள் header, chips (&quot;● Live&quot;, minutes)</>,
            "இது எந்த form, Phone connect ஆகி இருக்கா",
          ],
          [
            <>Progress bar (&quot;10 of 16 filled&quot;)</>,
            "எவ்வளவு முடிஞ்சிருக்கு",
          ],
          [
            <>
              <strong>Needs a look</strong> · <strong>Filled</strong> ·{" "}
              <strong>Not answered yet</strong>
            </>,
            <>
              முதல்ல <strong>Needs a look</strong> பாருங்க
            </>,
          ],
          [
            <>
              <strong>Fill form</strong> button
            </>,
            "Phone-ல வந்த answers-ஐ page-ல போடும். நீங்க click பண்ணாம page மாறாது",
          ],
          [
            <>
              ⋯ menu: <strong>Connect phone again</strong>,{" "}
              <strong>Start over</strong>, <strong>End form</strong>
            </>,
            "ஏதாவது reset பண்ணணும்னா",
          ],
          [
            "கீழ வலது பக்கம் ரெண்டு bubbles",
            <>
              நீல lightbulb = <strong>Voice tips</strong>, தங்க நிற த ={" "}
              <strong>Tamil typing</strong>
            </>,
          ],
        ]}
      />
    ),
  },
  {
    id: "colours",
    title: "Colours-ஓட அர்த்தம்",
    poster: "T3",
    body: (
      <ul>
        <li>
          <strong>மஞ்சள் கோடு</strong> form field சுத்தி: fill ஆகிடுச்சு. Submit
          பண்றதுக்கு முன்னாடி check பண்ணுங்க.
        </li>
        <li>
          <strong>Amber &quot;Needs a look&quot;:</strong> answer தப்பா
          இருக்கலாம், அல்லது தெளிவா இல்ல. Open பண்ணி பாருங்க.
        </li>
        <li>
          <strong>பச்சை &quot;● Live&quot;, பச்சை tick:</strong> connect ஆகி
          இருக்கு, அல்லது முடிஞ்சிடுச்சு.
        </li>
        <li>
          <strong>சிவப்பு mic:</strong> தட்டி பேசுங்க. முடிஞ்சதும் திரும்ப
          தட்டுங்க.
        </li>
      </ul>
    ),
  },
  {
    id: "voice",
    title: "Voice-ல form fill பண்றது",
    poster: "U1",
    body: (
      <ol>
        <li>
          Form page-ஐ Chrome-ல open பண்ணி, toolbar-ல Voice2Fill icon click
          பண்ணுங்க.
        </li>
        <li>
          <strong>QR for this page</strong>, அப்புறம்{" "}
          <strong>Generate QR</strong> click பண்ணுங்க. QR வரும்.
        </li>
        <li>
          Customer அவங்க Phone camera-ல QR scan பண்ணட்டும். QR ஒரு தடவை தான்
          வேலை செய்யும், 10 நிமிஷத்துக்கு.
        </li>
        <li>
          சிவப்பு mic-ஐ தட்டி பேசட்டும்:{" "}
          <em>&quot;பெயர் லட்சுமி, mobile 98421 30567, மாவட்டம் சேலம்&quot;</em>
          . 4 seconds அமைதியா இருந்தா recording தானா நிக்கும்.
        </li>
        <li>
          Phone-ல answers check பண்ணிட்டு <strong>Send to desktop</strong>{" "}
          தட்டட்டும்.
        </li>
        <li>
          Computer-ல <strong>Fill form</strong> click பண்ணுங்க.
        </li>
        <li>
          மஞ்சள் கோட்டுல இருக்கிற fields-ஐ check பண்ணுங்க. சரியா இருந்தா website
          form-ஐ நீங்களே submit பண்ணுங்க. தப்பா fill ஆச்சுன்னா{" "}
          <strong>Undo</strong> page-ஐ பழைய மாதிரி வைக்கும்.
        </li>
      </ol>
    ),
  },
  {
    id: "typing-only",
    title: "Typing only (mic இல்லாம)",
    poster: "U2",
    body: (
      <>
        <p>Counter-ல சத்தம் அதிகமா? Customer type பண்ணவே விரும்புறாங்களா?</p>
        <ol>
          <li>
            <strong>Generate QR</strong> click பண்றதுக்கு முன்னாடி{" "}
            <strong>Typing only</strong> tick பண்ணுங்க.
          </li>
          <li>
            Customer scan பண்ணி, ஒவ்வொரு answer-ஐயும் Phone-ல type பண்ணட்டும்
            (&quot;Tap a field to type its answer&quot;). Phone-ல mic எங்கயும்
            வராது.
          </li>
          <li>
            அவங்க <strong>Send to desktop</strong> தட்டினதும் நீங்க{" "}
            <strong>Fill form</strong> click பண்ணுங்க.
          </li>
        </ol>
        <p>
          Typing only forms voice minutes எடுக்காது. அப்புறம் கூட popup-ல{" "}
          <strong>Turn voice on</strong> / <strong>Turn voice off</strong>{" "}
          பண்ணலாம்.
        </p>
      </>
    ),
  },
  {
    id: "photos",
    title: "Phone-ல இருந்து photo, document",
    poster: "U3",
    body: (
      <>
        <ol>
          <li>
            Phone-ல upload field-ஐ தட்டுங்க. Website-ஓட rules அங்கயே தெரியும்
            (உதாரணம்: &quot;JPG · max 50 KB&quot;).
          </li>
          <li>
            Photo எடுங்க. Rotate, crop பண்ணலாம், இன்னும் pages சேர்க்கலாம். பல
            pages ஒரே A4 PDF-ஆ மாறும்.
          </li>
          <li>
            &quot;Ready&quot; வந்ததும் <strong>Send to computer</strong>{" "}
            தட்டுங்க. Size-ஐ Phone-ஏ சரி பண்ணிடும்.
          </li>
          <li>
            Computer-ல <strong>Fill form</strong> click பண்ணுங்க. File
            website-ஓட சொந்த upload field-லயே போகும்.
          </li>
        </ol>
        <p>
          Website file-ஐ ஏத்துக்கலைன்னா, ஏன்னு Phone-லயே காட்டும். புது photo
          எடுங்க.
        </p>
      </>
    ),
  },
  {
    id: "scan",
    title: "Fetch from scan (scanner-ல இருந்து)",
    poster: "U4",
    body: (
      <>
        <ol>
          <li>
            முதல் தடவை மட்டும்: <strong>Fetch from scan</strong> window-ல{" "}
            <strong>Connect your scan folder</strong> click பண்ணி, scanner save
            பண்ற folder-ஐ select பண்ணுங்க.
          </li>
          <li>Document-ஐ scanner-ல scan பண்ணுங்க.</li>
          <li>
            புது scan தானா வரும். Check பண்ணி அந்த field-க்கு save பண்ணுங்க.
          </li>
          <li>
            <strong>Fill form</strong> click பண்ணுங்க. File upload field-ல
            போகும்.
          </li>
        </ol>
        <p>
          Scans இந்த computer-லயே இருக்கும். Form முடிஞ்சதும், அல்லது sign out
          பண்ணும்போது அழிஞ்சிடும்.
        </p>
      </>
    ),
  },
  {
    id: "qr-for-other",
    title: "Queue-ல இருக்கிறவங்களுக்கு QR (QR for other)",
    poster: "U5",
    body: (
      <>
        <p>
          Queue நீளமா இருந்தா, அடுத்தவங்க இப்பவே answers சொல்ல ஆரம்பிக்கலாம்.
          Website open பண்ண தேவையில்ல.
        </p>
        <ol>
          <li>
            எந்த tab-லயும் popup open பண்ணி <strong>QR for other</strong> click
            பண்ணுங்க.
          </li>
          <li>
            <strong>Latest forms</strong>-ல form-ஐ select பண்ணுங்க (முன்னாடி use
            பண்ண forms இங்க இருக்கும்). <strong>One QR per customer</strong>:
            ஒவ்வொருத்தருக்கும் தனி QR.
          </li>
          <li>
            Queue-ல இருக்கிறவங்க scan பண்ணி பேசட்டும்,{" "}
            <strong>Send to desktop</strong> தட்டட்டும்.
          </li>
          <li>
            அவங்க turn வரும்போது form-ஐ open பண்ணுங்க.{" "}
            <strong>Customer answers waiting</strong>-ல அவங்க பேர்ல{" "}
            <strong>Use</strong> click பண்ணுங்க, அப்புறம்{" "}
            <strong>Fill form</strong>.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "waiting",
    title: "Customer answers waiting",
    poster: "U6",
    body: (
      <>
        <p>
          Customer <strong>Send to desktop</strong> பண்ணின answers 2 மணி நேரம்
          காத்திருக்கும். Website log out ஆனாலும், tab close ஆனாலும் போகாது.
          ஒவ்வொரு Send-உம் 2 மணி நேரத்தை திரும்ப ஆரம்பிக்கும்.
        </p>
        <p>
          Form இல்லாத tab-ல popup open பண்ணா, customer பேரும் Phone-ஓட கடைசி 4
          digits-உம் தெரியும்.
        </p>
        <ul>
          <li>
            <strong>Use:</strong> சரியான form-ஐ open பண்ணி <strong>Use</strong>{" "}
            click பண்ணுங்க, அப்புறம் <strong>Fill form</strong>. AI திரும்ப
            படிக்காது, minutes செலவாகாது.
          </li>
          <li>
            <strong>Customer needs to correct:</strong> QR திரும்ப வரும்.
            Answers அப்படியே இருக்கும். Customer போயிட்டாங்கன்னா{" "}
            <strong>Copy link</strong> அனுப்பலாம் (ஒரு தடவை, 10 நிமிஷம்).
          </li>
          <li>
            <strong>×:</strong> Answers, files இப்பவே அழிஞ்சிடும்.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "tamil-typing",
    title: "Tamil typing",
    body: (
      <>
        <p>
          Letter, message, remarks box: Tamil-ல பேசுங்க, Tamil எழுத்தா வரும்.{" "}
          <strong>Copy text</strong> பண்ணி எங்க வேணாலும் paste பண்ணுங்க. இதுக்கு
          form தேவையில்ல.
        </p>
        <p>
          முதல் தடவை popup கேக்கும்{" "}
          <strong>&quot;How will you speak?&quot;</strong>. நீங்க choose பண்றது
          ஞாபகம் வச்சுக்கும். மேல இருக்கிற{" "}
          <strong>Phone | This computer</strong> switch-ல எப்ப வேணாலும்
          மாத்தலாம்.
        </p>

        <h3>Phone-ல பேச (Speak on phone)</h3>
        <Poster id="U7" />
        <ol>
          <li>
            Popup-ல தங்க நிற <strong>த</strong> bubble (சிவப்பு mic badge) click
            பண்ணுங்க.
          </li>
          <li>
            <strong>Speak on phone</strong> choose பண்ணுங்க. இந்த computer-ல mic
            தேவையில்ல.
          </li>
          <li>
            Phone camera-ல QR scan பண்ணுங்க (&quot;Scan with the phone
            camera&quot;).
          </li>
          <li>
            Phone-ல mic-ஐ தட்டி Tamil-ல பேசுங்க. ஒவ்வொரு sentence-உம் popup-ல
            வந்துடும், popup close-ஆ இருந்தாலும்.
          </li>
          <li>
            தப்பா வந்தா Phone-லயே <strong>Edit</strong> (type பண்ணலாம், அல்லது{" "}
            <strong>Speak again</strong>) அல்லது <strong>Delete</strong> (5
            seconds-க்குள்ள <strong>Undo</strong> பண்ணலாம்). Computer text-உம்
            அதே மாதிரி மாறும்.
          </li>
          <li>
            Popup-ல <strong>Copy text</strong> click பண்ணி paste பண்ணுங்க.
          </li>
          <li>
            முடிஞ்சதும் Phone-ல <strong>Done</strong> தட்டுங்க, அல்லது popup-ல{" "}
            <strong>Disconnect</strong>.
          </li>
        </ol>

        <h3>Computer mic-ல பேச (This computer)</h3>
        <Poster id="U8" />
        <ol>
          <li>
            <strong>த</strong> bubble → <strong>This computer</strong>.
          </li>
          <li>
            முதல் தடவை மட்டும் <strong>Allow microphone</strong>: ஒரு சின்ன
            window open ஆகும், அங்க <strong>Allow</strong> click பண்ணுங்க.
          </li>
          <li>சிவப்பு mic-ஐ தட்டி பேசுங்க. முடிஞ்சதும் திரும்ப தட்டுங்க.</li>
          <li>
            <strong>Copy text</strong> click பண்ணி paste பண்ணுங்க.
          </li>
        </ol>
        <p>
          Computer-ல mic இல்லையா? <strong>Speak on phone</strong> use பண்ணுங்க.
        </p>
        <p>
          Tamil typing voice minutes மட்டும் எடுக்கும் (பேசின நேரம் மட்டும்).
          Edit பண்றதுக்கு எதுவும் செலவாகாது. Tamil typing QR ஒரு Voice Form Fill
          QR-ஆ count ஆகாது.
        </p>
      </>
    ),
  },
  {
    id: "next-customer",
    title: "அடுத்த customer, close ஆன Phone page",
    poster: "U9",
    body: (
      <LegalTable
        head={["என்ன ஆச்சு", "என்ன click பண்ணணும்"]}
        rows={[
          [
            "Phone page close ஆயிடுச்சு",
            <>
              <strong>Connect phone again</strong>: QR திரும்ப வரும், எல்லா
              answers-உம் அப்படியே இருக்கும்
            </>,
          ],
          [
            "அதே form-ல அடுத்த customer",
            <>
              Phone-ல <strong>Start over</strong> (புதிதாகத் தொடங்கு): answers
              clear ஆகும்
            </>,
          ],
          [
            "இந்த form முடிஞ்சது",
            <>
              Popup ⋯ menu-ல <strong>End form</strong>
            </>,
          ],
          [
            "யாரும் scan பண்றதுக்குள்ள QR expire ஆயிடுச்சு",
            <>
              <strong>Regenerate</strong>: இது free
            </>,
          ],
        ]}
      />
    ),
  },
  {
    id: "many-forms",
    title: "ஒரே நேரத்துல பல forms",
    poster: "U10",
    body: (
      <>
        <ol>
          <li>ஒவ்வொரு form-ஐயும் தனி tab-ல open பண்ணுங்க.</li>
          <li>
            ஒவ்வொரு tab-லயும் <strong>Generate QR</strong>. ஒவ்வொரு tab-க்கும்
            தனி QR, தனி customer Phone.
          </li>
          <li>
            எந்த tab-ல popup open பண்றீங்களோ, அந்த tab-ஓட form தான் popup-ல
            தெரியும் (&quot;1 other form open&quot;).
          </li>
        </ol>
        <p>ஒரே நேரத்துல 5 forms வரைக்கும்.</p>
        <p>
          Website app-ஆ install ஆகி இருந்து toolbar இல்லையா? Page-ல right-click
          → <strong>Fill this form with Voice2Fill</strong>, அல்லது{" "}
          <strong>Alt+Shift+V</strong> அழுத்துங்க.
        </p>
      </>
    ),
  },
  {
    id: "voice-tips",
    title: "Phone கொடுக்கும் முன் customer-கிட்ட சொல்லுங்க",
    poster: "T4",
    body: (
      <>
        <p>
          இந்த 6 tips சொன்னா answers முதல் தடவையே சரியா வரும், minutes-உம்
          மிச்சம். Phone-லயும், popup-ல நீல lightbulb-லயும் இதே tips இருக்கு.
        </p>
        <ol>
          <li>
            <strong>Field பேர், அப்புறம் answer:</strong>{" "}
            <em>&quot;பெயர் சௌரவ், mobile 98765 43210, மாவட்டம் ஈரோடு&quot;</em>
            . ஒரே தடவை பல fields சொல்லலாம். &quot;என் பெயர்…&quot;ன்னு ஆரம்பிக்க
            வேண்டாம்.
          </li>
          <li>
            <strong>
              ரொம்ப மெதுவாவும் வேண்டாம், ரொம்ப fast-ஆவும் வேண்டாம்:
            </strong>{" "}
            யோசிச்சிட்டு mic தட்டுங்க. &quot;ம்ம்…&quot;, &quot;அ…&quot;
            வேண்டாம்.
          </li>
          <li>
            <strong>முடிஞ்சதும் உடனே Stop தட்டுங்க:</strong> இடைவெளிக்கும்
            minutes போகும். மறந்துட்டா 4 seconds அமைதிக்கு அப்புறம் தானா
            நிக்கும்.
          </li>
          <li>
            <strong>Numbers சின்ன groups-ஆ:</strong> Mobile 5, 5-ஆ; Aadhaar 4,
            4-ஆ. Date <em>&quot;15 August 1990&quot;</em> மாதிரி. List-ல
            இருக்கிற option-ஐ screen-ல இருக்கிற மாதிரியே சொல்லுங்க.
          </li>
          <li>
            <strong>ஒரு answer திருத்த type பண்ணுங்க:</strong> அந்த field-ல{" "}
            <strong>✎ Type</strong> தட்டுங்க, minutes செலவாகாது. முழு form-ஐயும்
            திரும்ப record பண்ண வேண்டாம். Email, codes type பண்ணுங்க.
          </li>
          <li>
            <strong>Phone பக்கத்துல:</strong> Phone கீழ இருக்கிற mic-ஐ நோக்கி,
            ஒரு கை தூரத்துல பேசுங்க. Speaker, TV, fan சத்தம் வேண்டாம்.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "fixing",
    title: "தப்பான answer-ஐ திருத்த",
    poster: "T5",
    body: (
      <>
        <p>சுலபமானதுல இருந்து:</p>
        <ol>
          <li>
            <strong>திரும்ப சொல்லுங்க, field பேரோட:</strong>{" "}
            <em>&quot;no, not Jahan, Jagan&quot;</em>,{" "}
            <em>&quot;pincode la 455 illa 445&quot;</em>. பேரை எழுத்து எழுத்தா
            சொல்லலாம்: <em>&quot;J A G A N&quot;</em>.
          </li>
          <li>
            <strong>அந்த field-ஓட mic:</strong> பெரும்பாலான fields fill ஆனதும்
            ஒவ்வொரு row-லயும் சின்ன mic வரும்.
          </li>
          <li>
            <strong>✎ Type:</strong> Phone-ல type பண்ணுங்க. Minutes செலவாகாது.
          </li>
          <li>
            <strong>&quot;Which one did you mean?&quot;:</strong> சரியான option
            button-ஐ தட்டுங்க. Voice2Fill தானா guess பண்ணாது.
          </li>
          <li>
            <strong>Computer-ல:</strong> <strong>Undo</strong> (Fill form-க்கு
            அப்புறம் page-ஐ பழைய மாதிரி வைக்கும்) அல்லது{" "}
            <strong>Start over</strong> (எல்லா answers-உம் clear).
          </li>
        </ol>
        <p>Captcha, OTP: computer-லயே type பண்ணுங்க.</p>
      </>
    ),
  },
  {
    id: "problems",
    title: "Problem வந்தா என்ன பண்றது",
    poster: "T6",
    body: (
      <>
        <LegalTable
          head={["Problem", "என்ன பண்ணணும்"]}
          rows={[
            [
              "QR expire ஆயிடுச்சு",
              <>
                <strong>Regenerate</strong> (யாரும் scan பண்ணலைன்னா free)
              </>,
            ],
            [
              "Phone page close ஆயிடுச்சு",
              <>
                <strong>Connect phone again</strong> (answers அப்படியே
                இருக்கும்)
              </>,
            ],
            [
              "Website log out பண்ணிடுச்சு",
              <>
                Form-ஐ திரும்ப open பண்ணி →{" "}
                <strong>Customer answers waiting</strong> → <strong>Use</strong>
              </>,
            ],
            [
              "Website photo-வ ஏத்துக்கல",
              "ஏன்னு Phone காட்டும். திரும்ப photo எடுங்க",
            ],
            [
              "Computer-ல mic block ஆகி இருக்கு",
              <>
                <strong>Allow microphone</strong>, அல்லது{" "}
                <strong>Speak on phone</strong>
              </>,
            ],
            [
              <>Minutes முடிஞ்சிடுச்சு / &quot;Plan ended&quot;</>,
              <>
                Popup-ல <strong>Renew</strong> link (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp {company.whatsapp}
                </a>
                )
              </>,
            ],
            [
              "Fields தப்பா fill ஆச்சு",
              <>
                <strong>Undo</strong>, Phone-ல திருத்தி, திரும்ப{" "}
                <strong>Fill form</strong>
              </>,
            ],
          ]}
        />
        <p>
          இன்னும் உதவி வேணுமா?{" "}
          <Link href="/voice2fill/support">Support page</Link> பாருங்க, அல்லது{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>-க்கு எழுதுங்க.
        </p>
      </>
    ),
  },
  {
    id: "plan",
    title: "Plan-ல எது count ஆகும்",
    poster: "T7",
    body: (
      <>
        <h3>Count ஆகும்:</h3>
        <ul>
          <li>
            <strong>Voice minutes:</strong> mic record பண்ற நேரம் மட்டும்,
            form-லயோ Tamil typing-லயோ.
          </li>
          <li>
            <strong>Voice Form Fill QR:</strong> voice on-ஆ இருக்கும்போது
            ஒவ்வொரு <strong>Generate QR</strong>-உம்.
          </li>
          <li>
            <strong>Non Voice Form Fill QR:</strong>{" "}
            <strong>Typing only</strong>-ல ஒவ்வொரு <strong>Generate QR</strong>
            -உம்.
          </li>
          <li>
            <strong>Documents:</strong> Phone-ல இருந்தோ scanner-ல இருந்தோ
            form-க்கு போற ஒவ்வொரு photo, PDF-உம்.
          </li>
          <li>
            <strong>Computers:</strong> ஒரே நேரத்துல sign in ஆகி இருக்கிற
            computers.
          </li>
        </ul>
        <h3>Free (count ஆகாது):</h3>
        <ul>
          <li>
            யாரும் scan பண்ணாத expired QR-க்கு <strong>Regenerate</strong>,{" "}
            <strong>Connect phone again</strong>, <strong>Start over</strong>,
            waiting form-க்கு <strong>Use</strong>
          </li>
          <li>
            Typing only answers (minutes இல்ல), Tamil helper, Tamil typing-ல
            edit பண்றது
          </li>
          <li>Tamil typing QR (பேசின minutes மட்டும் போகும்)</li>
        </ul>
        <p>
          ஒரு counter முடிஞ்சா, அந்த ஒரு feature மட்டும் நிக்கும்.{" "}
          <strong>Renew</strong> பண்ணுங்க, அல்லது administrator-கிட்ட இன்னும்
          சேர்க்க சொல்லுங்க.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Customer details safe-ஆ வைக்க",
    poster: "T8",
    body: (
      <ol>
        <li>
          Voice2Fill எப்பவுமே form-ஐ submit பண்ணாது. நீங்க check பண்ணி, நீங்க
          submit பண்ணுங்க.
        </li>
        <li>
          ID photos-ஐ chat apps-ல forward பண்ணாதீங்க. Customer Phone-ல இருந்து
          நேரா form-க்கு போகும்.
        </li>
        <li>
          Voice recordings எங்கயும் save ஆகாது. Answers சுமார் ஒரு மணி நேரத்துல
          தானா அழியும் (Send பண்ணினா 2 மணி நேரத்துல).
        </li>
        <li>
          முடிஞ்சதா, அல்லது தப்பான customer-ஆ? <strong>×</strong> click பண்ணா
          waiting answers இப்பவே அழியும்.
        </li>
        <li>
          Computer-ஐ விட்டு போகும்போது sign out பண்ணுங்க. Chrome close பண்ணாலும்
          sign out ஆகும்.
        </li>
      </ol>
    ),
  },
  {
    id: "do-and-dont",
    title: "செய்யுங்க, செய்யாதீங்க",
    poster: "T9",
    body: (
      <LegalTable
        head={["✓ செய்யுங்க", "✗ செய்யாதீங்க"]}
        rows={[
          [
            "Phone கொடுக்கும் முன் voice tips காட்டுங்க",
            "Voice2Fill submit பண்ணும்னு நினைக்காதீங்க (அது பண்ணாது)",
          ],
          [
            "Submit-க்கு முன் ஒவ்வொரு மஞ்சள் field-ஐயும் check பண்ணுங்க",
            <>
              ஒரு தப்பான answer-க்கு முழு form-ஐ திரும்ப record பண்ணாதீங்க:{" "}
              <strong>✎ Type</strong> use பண்ணுங்க
            </>,
          ],
          [
            <>
              சத்தமான counter-ல <strong>Typing only</strong>
            </>,
            "நீண்ட இடைவெளியில mic-ஐ record பண்ண விடாதீங்க",
          ],
          [
            <>
              Queue நீளமா இருந்தா <strong>QR for other</strong>
            </>,
            "Customer photos-ஐ chat apps-ல அனுப்பாதீங்க",
          ],
          [
            <>
              Computer-ல mic இல்லைன்னா Tamil typing-க்கு{" "}
              <strong>Speak on phone</strong>
            </>,
            "உங்க PIN-ஐ யார்கிட்டயும் சொல்லாதீங்க",
          ],
        ]}
      />
    ),
  },
];

export default function Voice2FillHowToUsePage() {
  return (
    <div lang="ta">
      <section className="bg-v2f-blue py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/voice2fill/icon-48.png"
                alt=""
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span lang="en" className="font-label text-xs text-v2f-blue-soft">
                Voice2Fill · How to Use
              </span>
            </div>
            <h1 className="font-heading mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Voice2Fill: எப்படி use பண்றது
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-v2f-blue-soft">
              Customer-ஓட சொந்த Phone-ல QR scan பண்ணி, Tamil, English அல்லது
              Tanglish-ல answers சொல்லலாம். Answers computer-க்கு வரும். நீங்க{" "}
              <strong className="text-white">Fill form</strong> click பண்ணி,
              மஞ்சள் கோட்டுல இருக்கிற fields-ஐ check பண்ணிட்டு, website form-ஐ
              நீங்களே submit பண்ணுங்க. Voice2Fill எப்பவுமே தானா submit பண்ணாது.
            </p>
            <p className="mt-4 text-base leading-relaxed text-v2f-blue-soft">
              Phone-ல எந்த app-உம் install பண்ண தேவையில்ல. Phone browser-லயே
              வேலை செய்யும்.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <nav
              aria-label="இந்த page-ல"
              className="rounded-xl border border-black/10 bg-surface p-6"
            >
              <h2 className="font-heading text-lg font-bold text-ink">
                இந்த page-ல:
              </h2>
              <ol className="mt-4 grid list-decimal gap-x-8 gap-y-2 pl-5 text-sm sm:grid-cols-2">
                {sections.map((section) => (
                  <li key={section.id} className="text-ink-muted">
                    <a
                      href={`#${section.id}`}
                      className="text-brand-600 underline underline-offset-2"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-6 [&_a]:text-brand-600 [&_a]:underline [&_a]:underline-offset-2 [&_em]:text-ink [&_h3]:font-heading [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-ink [&_li]:leading-relaxed [&_li]:text-ink-muted [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_p]:leading-relaxed [&_p]:text-ink-muted [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
              {sections.map((section, i) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 space-y-5 border-t border-black/10 pt-10 mt-10"
                >
                  <h2 className="font-heading text-2xl font-bold text-ink">
                    {i + 1}. {section.title}
                  </h2>
                  {section.poster && <Poster id={section.poster} />}
                  {section.body}
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section lang="en" className="bg-v2f-blue">
        <Container className="flex flex-col items-center gap-8 py-20 text-center">
          <h2 className="font-heading max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Try it on the forms you fill every day.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/request-access">Start the Free Trial</Button>
            <Button href="/voice2fill#plans" variant="secondary">
              See Plans
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
