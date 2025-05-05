'use client';

import { useEffect, useState } from 'react';
import mermaid from 'mermaid';

type MermaidProps = {
  chart: string;
};

export default function Mermaid({ chart }: MermaidProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      mermaid.initialize({ startOnLoad: true });
      mermaid.contentLoaded();
    }
  }, [isClient, chart]);

  if (!isClient) return null;

  return (
    <div
      className="mermaid"
      dangerouslySetInnerHTML={{ __html: chart }}
    />
  );
}
