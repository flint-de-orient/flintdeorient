import wbsedcl from "@/assets/logos/wbsedcl.png";
import wbmdfc from "@/assets/logos/wbmdfc.png";
import easymakan from "@/assets/logos/easymakan.png";
import puberkalom from "@/assets/logos/puberkalom.jpg";
import cooksukh from "@/assets/logos/cooksukh.jpg";

export interface Partner {
  name: string;
  logo?: string;
  href?: string;
}

export const partners: Partner[] = [
  { name: "WBSEDCL", logo: wbsedcl },
  { name: "Puber Kalom", logo: puberkalom },
  { name: "FPA" },
  { name: "JustPizza" },
  { name: "WBMDFC", logo: wbmdfc },
  { name: "CookSukh", logo: cooksukh },
  { name: "EasyMakan", logo: easymakan },
];
