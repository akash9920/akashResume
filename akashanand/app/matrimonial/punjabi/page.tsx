import { buildMatrimonialMetadata } from "../matrimonial-metadata";
import { MatrimonialPageContent } from "../matrimonial-page-content";

export const metadata = buildMatrimonialMetadata("pa");

export default function MatrimonialPunjabiPage() {
  return <MatrimonialPageContent locale="pa" />;
}
