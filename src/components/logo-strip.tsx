/* Grayscale partner-logo marquee. The set renders twice and the track slides -50%
 * for a seamless CSS-only loop; edges fade out with a mask. */
const LOGOS: [string, string][] = [
  ["MEDVi", "quad-medvi.webp"],
  ["Lemonade", "lemonadelogo.webp"],
  ["American Home Shield", "american-home-shield.png"],
  ["Eden", "eden.png"],
  ["Trupanion", "trupanionlogo.png"],
  ["BetterHelp", "betterhelplogo.png"],
  ["Choice Home Warranty", "choice-home-warranty.png"],
  ["Embrace Pet Insurance", "embracelogo.png"],
  ["Sprout", "sprout.svg"],
  ["Healthy Paws", "healthypawslogo.jpg"],
  ["Talkspace", "talkspacelogo.png"],
  ["Select Home Warranty", "select-home-warranty.png"],
  ["Ollie", "ollielogo.png"],
  ["Fridays", "fridayslogo.png"],
  ["Spot & Tango", "spotandtangologo.png"],
  ["First American Home Warranty", "first-american.png"],
  ["Maximus", "maximuslogo.png"],
  ["Nom Nom", "nomnomlogo.png"],
  ["Headspace", "headspacelogo.png"],
  ["Smalls", "smallslogo.png"],
  ["Brightmeds", "brightmedslogo.png"],
  ["Darwin's", "darwinslogo.png"],
  ["Luvo", "luvo.svg"],
  ["Wisdom Panel", "wisdompanellogo.png"],
  ["Home Warranty of America", "home-warranty-of-america.png"],
  ["Happy Head", "happyheadlogo.png"],
  ["Taurus", "tauruslogo.svg"],
];

export function LogoStrip() {
  return (
    <section aria-labelledby="partners-strip" className="border-y border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 id="partners-strip" className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Brands featured across our network
        </h2>
        <div
          className="logo-marquee relative mt-8 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <ul className="logo-marquee-track flex items-center bg-paper">
            {[...LOGOS, ...LOGOS].map(([name, file], i) => (
              <li
                key={`${file}-${i}`}
                aria-hidden={i >= LOGOS.length}
                className="mr-12 flex h-8 w-28 shrink-0 items-center justify-center sm:mr-16 sm:h-9 sm:w-32"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/partners/${file}`}
                  alt={i < LOGOS.length ? name : ""}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain opacity-55 mix-blend-multiply grayscale transition hover:opacity-90"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
