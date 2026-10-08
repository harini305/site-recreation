// Source: samadibali.com/privacy-policy-samadi and /website-disclaimer (English versions).

export type LegalSection = { title: string; paragraphs?: string[]; list?: string[]; after?: string[] };

export const privacyPolicy: LegalSection[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Samadi Super Foods & Wellness (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: ["We may collect the following types of information:"],
    list: [
      "Personal information (name, email address, phone number)",
      "Booking details for yoga classes or events",
      "Purchase information (restaurant or supermarket orders)",
      "Website usage data (cookies, IP address, browser type)",
    ],
  },
  {
    title: "3. How We Use Your Information",
    paragraphs: ["We use your information to:"],
    list: [
      "Process bookings and transactions",
      "Respond to inquiries and customer service requests",
      "Send updates, promotions, or newsletters (if you opt in)",
      "Improve our website and services",
    ],
  },
  {
    title: "4. Sharing Your Information",
    paragraphs: ["We do not sell or rent your personal data. We may share your information with:"],
    list: ["Trusted service providers (e.g., booking systems, payment processors)", "Authorities if required by law"],
  },
  {
    title: "5. Cookies",
    paragraphs: [
      "Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.",
    ],
  },
  {
    title: "6. Data Security",
    paragraphs: [
      "We implement appropriate technical and organisational measures to protect your personal data from unauthorised access, loss, or misuse.",
    ],
  },
  {
    title: "7. Your Rights",
    paragraphs: ["You have the right to:"],
    list: [
      "Access your personal data",
      "Request corrections or deletion",
      "Withdraw consent for marketing communications",
    ],
    after: ["To exercise your rights, please contact us."],
  },
  {
    title: "8. Third-Party Links",
    paragraphs: [
      "Our website may contain links to third-party websites. We are not responsible for their privacy practices.",
    ],
  },
  {
    title: "9. Updates to This Policy",
    paragraphs: ["We may update this Privacy Policy from time to time. Changes will be posted on this page."],
  },
  {
    title: "10. Contact Us",
    paragraphs: ["If you have any questions about this Privacy Policy, please contact us:"],
    list: ["Email: contact@samadibali.com", "Phone: +62 813-2525-7500", "Location: Canggu, Bali, Indonesia"],
  },
];

export const disclaimer: LegalSection[] = [
  {
    title: "1. General Information",
    paragraphs: [
      "The information provided by Samadi Super Foods & Wellness (“we”, “our”, “us”) on this website is for general informational and educational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information.",
    ],
  },
  {
    title: "2. Health & Wellness Disclaimer",
    paragraphs: [
      "Our services, including yoga classes, workshops, and wellness programs, are not intended as medical advice, diagnosis, or treatment.",
      "You should consult with a qualified healthcare professional before starting any new exercise, diet, or wellness program, especially if you have any medical conditions or injuries.",
      "Participation in any yoga class, event, or activity is at your own risk.",
    ],
  },
  {
    title: "3. Food & Nutrition Disclaimer",
    paragraphs: [
      "All food and beverages served at our restaurant are prepared with care using fresh and organic ingredients. However:",
    ],
    list: [
      "We do not guarantee the absence of allergens",
      "Nutritional information is provided for general guidance only",
    ],
    after: ["Customers with allergies or dietary restrictions should inform our staff before ordering."],
  },
  {
    title: "4. External Links Disclaimer",
    paragraphs: [
      "Our website may contain links to third-party websites or services. We do not control or guarantee the accuracy or reliability of any information on these external sites.",
    ],
  },
  {
    title: "5. Limitation of Liability",
    paragraphs: [
      "Under no circumstances shall Samadi Super Foods & Wellness be held liable for any loss or damage resulting from:",
    ],
    list: ["Use of the website", "Participation in our services", "Reliance on any information provided"],
  },
  {
    title: "6. Changes to This Disclaimer",
    paragraphs: ["We reserve the right to update or change this Disclaimer at any time without prior notice."],
  },
  {
    title: "7. Contact Us",
    paragraphs: ["If you have any questions regarding this Disclaimer, please contact us:"],
    list: ["Email: contact@samadibali.com", "Location: Jalan Padang Linjong 39, Canggu, Bali, Indonesia"],
  },
];
