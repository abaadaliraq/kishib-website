import LegalPage from "@/components/LegalPage";
import { legalPages } from "@/data/legalPages";

export default function PrivacyPage() {
  return <LegalPage page={legalPages.privacy} />;
}
