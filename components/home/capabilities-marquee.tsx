import type { ReactNode } from "react";

import { TextLoop } from "@/components/ui/text-loop";

export function CapabilitiesMarquee(): ReactNode {
  return (
    <section aria-label="What we build" className="relative w-full">
      <TextLoop
        text="Websites   AI Automation   Apps"
        shape="line"
        speed={80}
        direction="forward"
        separator="✦"
        fontSize={34}
        fontWeight={800}
        letterSpacing={1}
        uppercase
        color="#000000"
        ribbon
        ribbonColor="#39ff14"
        ribbonWidth={92}
        pauseOnHover
      />
    </section>
  );
}
