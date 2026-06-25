import wbsedcl from "@/assets/logos/wbsedcl_white.png";
import puberkalom from "@/assets/logos/puberkalom_white.png";
import wbmdfc from "@/assets/logos/wbmdfc_white.png";
import cooksukh from "@/assets/logos/cooksukh_white.png";
import easymakan from "@/assets/logos/easymakan_white.png";
import assamSchool from "@/assets/logos/assam_school_white.png";
import sikira from "@/assets/logos/sikira_white.png";
import nawjan from "@/assets/logos/nawjan_white.png";
import flintbox from "@/assets/logos/flintbox_white.png";
import ledgerit from "@/assets/logos/ledgerit_white.png";

const clients = [
  { name: "WBSEDCL", logo: wbsedcl },
  { name: "Puber Kalom", logo: puberkalom },
  { name: "WBMDFC", logo: wbmdfc },
  { name: "CookSukh", logo: cooksukh },
  { name: "EasyMakan", logo: easymakan },
  { name: "Assam School", logo: assamSchool },
  { name: "Sikira High School", logo: sikira },
  { name: "Nawjan Institute of Nursing", logo: nawjan },
  { name: "FlintBox", logo: flintbox },
  { name: "LedgerIT", logo: ledgerit },
];

export const ClientStrip = () => {
  const list = [...clients, ...clients];
  return (
    <section className="py-16 border-y border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Trusted by leading brands
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-16 md:gap-24 marquee w-max items-center">
          {list.map((c, i) => (
            c.logo ? (
              <img
                key={i}
                src={c.logo}
                alt={c.name}
                className="h-16 md:h-20 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105"
              />
            ) : (
              <span
                key={i}
                className="text-2xl md:text-3xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap"
              >
                {c.name}
              </span>
            )
          ))}
        </div>
      </div>
    </section>
  );
};
