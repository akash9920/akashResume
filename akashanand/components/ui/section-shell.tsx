import { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type SectionShellProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section id={id} className={`scroll-mt-28 py-12 sm:py-16 ${className}`}>
      <Reveal>{children}</Reveal>
    </section>
  );
}
