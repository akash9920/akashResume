import { buildMatrimonialMetadata } from "./matrimonial-metadata";
import { MatrimonialPageContent } from "./matrimonial-page-content";

export const metadata = buildMatrimonialMetadata("en");

export default function MatrimonialPage() {
  return <MatrimonialPageContent locale="en" />;
}
