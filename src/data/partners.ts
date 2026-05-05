import wbsedcl from "@/assets/logos/wbsedcl_white.png";
import wbmdfc from "@/assets/logos/wbmdfc_white.png";
import easymakan from "@/assets/logos/easymakan_white.png";
import puberkalom from "@/assets/logos/puberkalom_white.png";
import cooksukh from "@/assets/logos/cooksukh_white.png";

export interface Partner {
  name: string;
  logo?: string;
  href?: string;
}

export const partners: Partner[] = [
  { name: "WBSEDCL", logo: wbsedcl },
  { name: "Puber Kalom", logo: puberkalom },
  { name: "WBMDFC", logo: wbmdfc },
  { name: "CookSukh", logo: cooksukh },
  { name: "EasyMakan", logo: easymakan },
  { name: "Sikira" },
];
