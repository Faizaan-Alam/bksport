import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Shop } from "@/components/shop";
import { SiteFooter } from "@/components/site-footer";
import { Visit } from "@/components/visit";
import { INSTAGRAM, PHONE_TEL } from "@/lib/site";

const ticker =
  "Cricket bats · Knocking & oiling · Badminton rackets · Li-Ning · Yonex · Football · Basketball · Gym gear · Kit bags · Sports shoes · Pan-India delivery · Worldwide shipping · ";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportingGoodsStore",
    name: "BK Sports & Fitness",
    alternateName: "B.K. Sports & Fitness",
    telephone: PHONE_TEL,
    url: INSTAGRAM,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 1, Residential Scheme, Paschim Vihar Main Road, Jwalaheri Village",
      addressLocality: "Paschim Vihar",
      addressRegion: "Delhi",
      postalCode: "110063",
      addressCountry: "IN",
    },
    sameAs: [INSTAGRAM],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <Hero />
        <div className="marquee overflow-hidden border-y border-white/10 bg-white/[0.02] py-3.5" aria-hidden="true">
          <div className="animate-ticker flex w-max">
            <p className="m-0 font-display text-xl tracking-[0.16em] whitespace-nowrap text-[#d7dccb] uppercase">{ticker}</p>
            <p className="m-0 font-display text-xl tracking-[0.16em] whitespace-nowrap text-[#d7dccb] uppercase">{ticker}</p>
          </div>
        </div>
        <Shop />
        <Services />
        <About />
        <Visit />
      </main>
      <SiteFooter />
    </>
  );
}
