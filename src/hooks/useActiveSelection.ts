"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["about", "onboarding-plan", "program-spotlight", "footer"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter(Boolean) as HTMLElement[];
    const isMobile = window.innerWidth < 640; // Tailwind's `sm` breakpoint

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: isMobile ? "0px 0px -50% 0px" : "0px 0px -50% 0px",
        threshold: 0.01 // 20% of the section needs to be in view
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
