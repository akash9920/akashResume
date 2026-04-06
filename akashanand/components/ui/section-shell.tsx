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
    <section id={id} className={`scroll-mt-24 py-10 sm:scroll-mt-28 sm:py-16 ${className}`}>
      <Reveal>{children}</Reveal>
    </section>
  );
}
