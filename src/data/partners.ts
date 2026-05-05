import wbsedcl from "@/assets/logos/wbsedcl_white.png";
import wbmdfc from "@/assets/logos/wbmdfc_white.png";
import easymakan from "@/assets/logos/easymakan_white.png";
import puberkalom from "@/assets/logos/puberkalom_white.png";
import cooksukh from "@/assets/logos/cooksukh_white.png";
import assamSchool from "@/assets/logos/assam_school_white.png";
import sikira from "@/assets/logos/sikira_white.png";
import nawjan from "@/assets/logos/nawjan_white.png";

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
  { name: "Assam School", logo: assamSchool },
  { name: "Sikira High School", logo: sikira },
  { name: "Nawjan Institute of Nursing", logo: nawjan },
];
