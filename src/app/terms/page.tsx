import LegalPage from "@/components/LegalPage";
import { legalPages } from "@/data/legalPages";

export default function TermsPage() {
  return <LegalPage page={legalPages.terms} />;
}
