// components/LightboxImage.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function LightboxImage({ src, alt }: { src: string; alt?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt || ''}
        quality={100}
        width={400}
        height={300}
        className="cursor-zoom-in rounded shadow-md hover:opacity-80 transition"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-screen h-screen flex items-center justify-center p-4">
            <Image
              src={src}
                quality={100}
              alt={alt || ''}
              fill
              className="object-contain max-h-[90vh] max-w-[90vw] w-auto h-auto rounded"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-6 text-white text-3xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
