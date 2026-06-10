export interface LegalDoc {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}

const COMPANY = "Flint De Orient";
const EMAIL = "hello@flintdeorient.com";
const ADDRESS = "Unit 320, PS Abacus, New Town, Kolkata 700161";

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    updated: "June 2026",
    intro: `This Privacy Policy explains how ${COMPANY} ("we", "us", or "our") collects, uses, and protects the information you share with us when you visit our website or engage our services.`,
    sections: [
      {
        heading: "Information we collect",
        body: [
          "When you contact us through our forms, email, or phone, we may collect your name, email address, phone number, and any details you choose to share about your project.",
          "We also automatically collect limited technical data such as your browser type, device, and pages visited, to help us understand how the site is used and to improve it.",
        ],
      },
      {
        heading: "How we use your information",
        body: [
          "We use the information you provide to respond to your enquiries, deliver and improve our services, send you relevant updates you have requested, and meet our legal obligations.",
          "We do not sell your personal information to third parties.",
        ],
      },
      {
        heading: "Cookies & analytics",
        body: [
          "Our website may use cookies and similar technologies to remember your preferences and measure traffic. You can control or disable cookies through your browser settings, though some features may not function as intended.",
        ],
      },
      {
        heading: "Data security & retention",
        body: [
          "We apply reasonable technical and organisational measures to protect your data against unauthorised access, loss, or misuse. We retain personal data only for as long as necessary to fulfil the purposes described here or as required by law.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You may request access to, correction of, or deletion of the personal information we hold about you. To exercise these rights, contact us using the details below.",
        ],
      },
      {
        heading: "Contact us",
        body: [
          `If you have any questions about this Privacy Policy, email us at ${EMAIL} or write to us at ${ADDRESS}.`,
        ],
      },
    ],
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    updated: "June 2026",
    intro: `The information provided by ${COMPANY} on this website is for general informational purposes only. By using this site you accept the terms of this Disclaimer.`,
    sections: [
      {
        heading: "No professional advice",
        body: [
          "Content on this website does not constitute professional, legal, financial, or technical advice. You should not rely on it as a substitute for advice tailored to your specific situation.",
        ],
      },
      {
        heading: "Accuracy of information",
        body: [
          "We make every effort to keep the information on this site accurate and up to date, but we make no warranties of any kind, express or implied, about its completeness, accuracy, reliability, or availability.",
          "Any reliance you place on such information is strictly at your own risk.",
        ],
      },
      {
        heading: "External links",
        body: [
          "This website may contain links to external sites that are not provided or maintained by us. We do not guarantee the accuracy or relevance of any information on those third-party websites.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          `In no event shall ${COMPANY} be liable for any loss or damage arising from the use of, or reliance on, the content of this website.`,
        ],
      },
      {
        heading: "Contact us",
        body: [
          `For questions about this Disclaimer, reach us at ${EMAIL}.`,
        ],
      },
    ],
  },
  {
    slug: "terms-of-use",
    title: "Terms of Use",
    updated: "June 2026",
    intro: `These Terms of Use govern your access to and use of the ${COMPANY} website. By using this website, you agree to be bound by these terms.`,
    sections: [
      {
        heading: "Use of the website",
        body: [
          "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the site.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          `All content on this website — including text, graphics, logos, and software — is the property of ${COMPANY} or its licensors and is protected by applicable intellectual property laws.`,
          "You may not reproduce, distribute, or create derivative works from any content without our prior written permission.",
        ],
      },
      {
        heading: "Services & quotations",
        body: [
          "Descriptions of our services on this website are for general information and do not constitute a binding offer. Specific deliverables, timelines, and pricing are set out in individual agreements with clients.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "We provide this website on an \"as is\" and \"as available\" basis and make no warranties regarding uninterrupted or error-free operation. To the fullest extent permitted by law, we disclaim liability for any damages arising from your use of the site.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These Terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts of Kolkata, West Bengal.",
        ],
      },
      {
        heading: "Contact us",
        body: [
          `If you have any questions about these Terms of Use, contact us at ${EMAIL}.`,
        ],
      },
    ],
  },
];

export const getLegalDoc = (slug: string) => legalDocs.find((d) => d.slug === slug);
