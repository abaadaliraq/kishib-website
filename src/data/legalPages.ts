export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] };

export type LegalPageContent = {
  title: string;
  blocks: LegalBlock[];
};

export const legalPages = {
  terms: {
    title: "Terms and Conditions",
    blocks: [
      { type: "paragraph", text: "Last updated: [Insert Date]" },
      { type: "paragraph", text: "Welcome to KISHIB." },
      {
        type: "paragraph",
        text: "These Terms and Conditions govern your access to and use of the KISHIB website, platform, and related services. By using KISHIB, you agree to these Terms. If you do not agree, you should not use the website or services.",
      },
      { type: "heading", text: "1. About KISHIB" },
      {
        type: "paragraph",
        text: "KISHIB is a digital platform focused on antiques, collectibles, historical objects, and cultural heritage. The platform aims to help users explore, understand, document, and evaluate items through modern technologies, visual analysis, reference sources, and available market information.",
      },
      {
        type: "paragraph",
        text: "KISHIB is intended for informational, educational, and reference purposes only.",
      },
      { type: "heading", text: "2. No Professional or Legal Certification" },
      {
        type: "paragraph",
        text: "Any information, analysis, estimate, description, or report generated or displayed by KISHIB is provided as a preliminary digital assessment.",
      },
      {
        type: "paragraph",
        text: "KISHIB does not provide official authentication, legal certification, ownership verification, archaeological certification, customs clearance, museum certification, or legally binding valuation.",
      },
      {
        type: "paragraph",
        text: "Users should consult qualified experts, licensed appraisers, historians, legal advisors, auction houses, or relevant authorities before making decisions related to purchase, sale, insurance, export, import, restoration, inheritance, or legal ownership.",
      },
      { type: "heading", text: "3. User Responsibility" },
      { type: "paragraph", text: "By using KISHIB, you agree that:" },
      {
        type: "list",
        items: [
          "You are responsible for the accuracy of any information, images, descriptions, or documents you provide.",
          "You will not upload images or content that you do not have the right to use.",
          "You will not use KISHIB for illegal trade, fraud, misrepresentation, or the sale of restricted or prohibited items.",
          "You will not rely solely on KISHIB reports for financial, legal, historical, or commercial decisions.",
          "You are responsible for checking local laws related to antiques, cultural heritage, artifacts, export restrictions, and ownership rules.",
        ],
      },
      { type: "heading", text: "4. Evaluation and Market Estimates" },
      {
        type: "paragraph",
        text: "KISHIB may provide estimated values, historical context, object descriptions, possible material analysis, similar item references, or market comparisons.",
      },
      {
        type: "paragraph",
        text: "These results are not guaranteed to be accurate, complete, or final. Values may vary depending on condition, provenance, authenticity, rarity, demand, documentation, expert review, auction history, and market changes.",
      },
      {
        type: "paragraph",
        text: "KISHIB is not responsible for any loss, dispute, failed sale, incorrect pricing, or commercial decision based on platform outputs.",
      },
      { type: "heading", text: "5. Prohibited Use" },
      { type: "paragraph", text: "You may not use KISHIB to:" },
      {
        type: "list",
        items: [
          "Upload false, misleading, stolen, illegal, offensive, or harmful content.",
          "Promote the illegal sale or trafficking of cultural heritage objects.",
          "Misrepresent KISHIB results as official certificates.",
          "Attempt to reverse engineer, copy, disrupt, overload, or misuse the platform.",
          "Use automated scraping, bots, or unauthorized data extraction.",
          "Violate intellectual property rights or privacy rights of others.",
        ],
      },
      { type: "heading", text: "6. Intellectual Property" },
      {
        type: "paragraph",
        text: "All content, design, branding, logos, text, interface elements, software, and visual identity related to KISHIB are owned by KISHIB or its licensors, unless otherwise stated.",
      },
      {
        type: "paragraph",
        text: "You may not copy, reproduce, modify, distribute, or commercially exploit any part of the website or platform without prior written permission.",
      },
      { type: "heading", text: "7. User Content" },
      {
        type: "paragraph",
        text: "When you upload images, descriptions, or related information to KISHIB, you grant KISHIB a limited right to process, analyze, store, and display that content as necessary to provide the service.",
      },
      {
        type: "paragraph",
        text: "You confirm that you own or have permission to use any content you upload.",
      },
      {
        type: "paragraph",
        text: "KISHIB does not claim ownership of your uploaded content, but may use it to operate, improve, secure, and develop the platform, subject to the Privacy Policy.",
      },
      { type: "heading", text: "8. Third-Party Services" },
      {
        type: "paragraph",
        text: "KISHIB may use third-party services for hosting, analytics, authentication, image processing, artificial intelligence, storage, payment processing, market data, or similar item references.",
      },
      {
        type: "paragraph",
        text: "KISHIB is not responsible for the content, availability, policies, or performance of third-party services.",
      },
      { type: "heading", text: "9. Availability of Service" },
      {
        type: "paragraph",
        text: "KISHIB may update, suspend, modify, or discontinue any part of the website or platform at any time without prior notice.",
      },
      {
        type: "paragraph",
        text: "We do not guarantee that the service will always be available, uninterrupted, secure, or error-free.",
      },
      { type: "heading", text: "10. Limitation of Liability" },
      {
        type: "paragraph",
        text: "To the maximum extent permitted by law, KISHIB shall not be liable for any direct, indirect, incidental, consequential, financial, commercial, reputational, or legal damages arising from your use of the website, platform, reports, estimates, or related services.",
      },
      { type: "heading", text: "11. Disclaimer of Warranties" },
      {
        type: "paragraph",
        text: 'KISHIB is provided on an "as is" and "as available" basis. We make no warranties regarding accuracy, reliability, completeness, suitability, market value, authenticity, legality, or availability of the service or its outputs.',
      },
      { type: "heading", text: "12. Changes to These Terms" },
      {
        type: "paragraph",
        text: "We may update these Terms from time to time. Any changes will be posted on this page with an updated date. Continued use of KISHIB after changes means you accept the updated Terms.",
      },
      { type: "heading", text: "13. Contact" },
      {
        type: "paragraph",
        text: "For questions about these Terms, please contact us at:",
      },
      { type: "paragraph", text: "[Insert Contact Email]" },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    blocks: [
      { type: "paragraph", text: "Last updated: [Insert Date]" },
      {
        type: "paragraph",
        text: "KISHIB respects your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use the KISHIB website, platform, and related services.",
      },
      { type: "heading", text: "1. Information We Collect" },
      { type: "paragraph", text: "We may collect the following types of information:" },
      { type: "subheading", text: "a. Information you provide directly" },
      { type: "paragraph", text: "This may include:" },
      {
        type: "list",
        items: [
          "Name",
          "Email address",
          "Phone number",
          "Country or location information",
          "Account information",
          "Uploaded images",
          "Item descriptions",
          "Notes, comments, or additional details you provide",
          "Communication messages sent to KISHIB",
        ],
      },
      { type: "subheading", text: "b. Automatically collected information" },
      { type: "paragraph", text: "When you use our website, we may collect:" },
      {
        type: "list",
        items: [
          "IP address",
          "Browser type",
          "Device type",
          "Operating system",
          "Pages visited",
          "Date and time of visit",
          "Usage behavior",
          "Referring links",
          "General analytics data",
        ],
      },
      { type: "subheading", text: "c. Uploaded item data" },
      {
        type: "paragraph",
        text: "When you upload images or details of antiques, collectibles, or historical objects, we may process this content to provide analysis, reports, storage, comparison, and platform functionality.",
      },
      { type: "heading", text: "2. How We Use Your Information" },
      { type: "paragraph", text: "We may use your information to:" },
      {
        type: "list",
        items: [
          "Provide and operate the KISHIB platform",
          "Analyze uploaded images and item descriptions",
          "Generate digital reports and estimates",
          "Improve platform accuracy, performance, and user experience",
          "Manage user accounts and authentication",
          "Provide customer support",
          "Send important service updates",
          "Maintain security and prevent misuse",
          "Improve research, classification, and reference tools",
          "Comply with legal obligations when required",
        ],
      },
      { type: "heading", text: "3. Artificial Intelligence and Image Analysis" },
      {
        type: "paragraph",
        text: "KISHIB may use artificial intelligence, computer vision, image analysis tools, and third-party technical services to process uploaded images and item information.",
      },
      {
        type: "paragraph",
        text: "The analysis is used to provide preliminary descriptions, historical context, similar item references, and estimated value ranges. These results are informational and not official authentication or legal certification.",
      },
      { type: "heading", text: "4. Cookies and Tracking Technologies" },
      {
        type: "paragraph",
        text: "We use cookies and similar technologies to improve website functionality, remember preferences, understand usage, and improve the platform.",
      },
      { type: "paragraph", text: "For more details, please review our Cookie Policy." },
      { type: "heading", text: "5. Sharing of Information" },
      { type: "paragraph", text: "We do not sell your personal information." },
      {
        type: "paragraph",
        text: "We may share limited information with trusted service providers who help us operate the platform, such as hosting providers, analytics tools, authentication providers, storage providers, AI processing services, payment services, or technical support tools.",
      },
      {
        type: "paragraph",
        text: "These providers are only allowed to use the information as necessary to provide services to KISHIB.",
      },
      {
        type: "paragraph",
        text: "We may also disclose information if required by law, legal process, government request, or to protect the rights, safety, and security of KISHIB, users, or the public.",
      },
      { type: "heading", text: "6. Data Storage and Security" },
      {
        type: "paragraph",
        text: "We take reasonable technical and organizational measures to protect your information from unauthorized access, misuse, loss, or disclosure.",
      },
      {
        type: "paragraph",
        text: "However, no online platform or transmission method is completely secure. You use KISHIB at your own risk.",
      },
      { type: "heading", text: "7. Data Retention" },
      {
        type: "paragraph",
        text: "We retain your information only as long as necessary to provide the service, improve the platform, comply with legal obligations, resolve disputes, and enforce our policies.",
      },
      {
        type: "paragraph",
        text: "Uploaded images, reports, and account data may be retained as part of your user history unless deleted according to platform functionality or upon valid request where applicable.",
      },
      { type: "heading", text: "8. Your Rights" },
      {
        type: "paragraph",
        text: "Depending on your location and applicable law, you may have rights to:",
      },
      {
        type: "list",
        items: [
          "Access your personal information",
          "Correct inaccurate information",
          "Request deletion of your information",
          "Object to certain processing",
          "Withdraw consent where applicable",
          "Request a copy of your data",
        ],
      },
      { type: "paragraph", text: "To exercise these rights, contact us at:" },
      { type: "paragraph", text: "[Insert Contact Email]" },
      { type: "heading", text: "9. Children's Privacy" },
      {
        type: "paragraph",
        text: "KISHIB is not intended for children under the age of 13, or the minimum legal age required in your jurisdiction. We do not knowingly collect personal information from children.",
      },
      { type: "heading", text: "10. International Use" },
      {
        type: "paragraph",
        text: "KISHIB may be accessed by users from different countries. By using the platform, you understand that your information may be processed and stored in countries where our service providers operate.",
      },
      { type: "heading", text: "11. Third-Party Links" },
      {
        type: "paragraph",
        text: "The website may contain links to third-party websites or services. KISHIB is not responsible for the privacy practices, content, or policies of third-party websites.",
      },
      { type: "heading", text: "12. Changes to This Privacy Policy" },
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.",
      },
      { type: "heading", text: "13. Contact" },
      {
        type: "paragraph",
        text: "For questions about this Privacy Policy, please contact us at:",
      },
      { type: "paragraph", text: "[Insert Contact Email]" },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    blocks: [
      { type: "paragraph", text: "Last updated: [Insert Date]" },
      {
        type: "paragraph",
        text: "This Cookie Policy explains how KISHIB uses cookies and similar technologies on our website and platform.",
      },
      { type: "heading", text: "1. What Are Cookies?" },
      {
        type: "paragraph",
        text: "Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember preferences, improve performance, and understand how visitors use the site.",
      },
      { type: "heading", text: "2. How KISHIB Uses Cookies" },
      {
        type: "paragraph",
        text: "KISHIB may use cookies and similar technologies for the following purposes:",
      },
      { type: "subheading", text: "a. Essential Cookies" },
      {
        type: "paragraph",
        text: "These cookies are necessary for the website to function properly. They may be used for security, page navigation, language preferences, account access, and basic platform features.",
      },
      {
        type: "paragraph",
        text: "Without these cookies, some parts of the website may not work correctly.",
      },
      { type: "subheading", text: "b. Performance and Analytics Cookies" },
      {
        type: "paragraph",
        text: "These cookies help us understand how visitors use the website, which pages are visited, and how the platform can be improved.",
      },
      {
        type: "paragraph",
        text: "Analytics data is used to improve performance, design, content, and user experience.",
      },
      { type: "subheading", text: "c. Functionality Cookies" },
      {
        type: "paragraph",
        text: "These cookies help remember your preferences, such as language selection, interface settings, or previously selected options.",
      },
      { type: "subheading", text: "d. Third-Party Cookies" },
      {
        type: "paragraph",
        text: "Some cookies may be placed by third-party services used by KISHIB, such as analytics providers, authentication services, hosting providers, AI tools, payment services, or embedded content providers.",
      },
      {
        type: "paragraph",
        text: "KISHIB does not control third-party cookies directly. Their use is governed by the privacy and cookie policies of those third-party providers.",
      },
      { type: "heading", text: "3. Cookie Consent" },
      {
        type: "paragraph",
        text: "When you visit the KISHIB website, you may see a cookie banner asking you to accept or manage cookie preferences.",
      },
      {
        type: "paragraph",
        text: "By accepting cookies, you agree to our use of cookies as described in this Cookie Policy.",
      },
      { type: "heading", text: "4. Managing Cookies" },
      {
        type: "paragraph",
        text: "You can manage or disable cookies through your browser settings. Most browsers allow you to:",
      },
      {
        type: "list",
        items: [
          "View stored cookies",
          "Delete cookies",
          "Block cookies",
          "Control cookie permissions for specific websites",
        ],
      },
      {
        type: "paragraph",
        text: "Please note that disabling some cookies may affect website functionality.",
      },
      { type: "heading", text: "5. Changes to This Cookie Policy" },
      {
        type: "paragraph",
        text: "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated date.",
      },
      { type: "heading", text: "6. Contact" },
      {
        type: "paragraph",
        text: "For questions about this Cookie Policy, please contact us at:",
      },
      { type: "paragraph", text: "[Insert Contact Email]" },
    ],
  },
} satisfies Record<"terms" | "privacy" | "cookies", LegalPageContent>;
