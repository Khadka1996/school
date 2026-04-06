"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="masonry-item block w-full overflow-hidden rounded-xl">
        <Image
          src={`${src}?auto=format&fit=crop&w=800&q=80`}
          alt={alt}
          width={800}
          height={560}
          className="h-auto w-full rounded-xl object-cover transition hover:scale-[1.02]"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4">
          <button
            className="absolute right-5 top-5 rounded-full bg-white p-2 text-primary"
            onClick={() => setOpen(false)}
            aria-label="Close image"
          >
            <X className="h-4 w-4" />
          </button>
          <Image
            src={`${src}?auto=format&fit=crop&w=1400&q=90`}
            alt={alt}
            width={1400}
            height={900}
            className="max-h-[90vh] w-auto rounded-xl"
            loading="lazy"
          />
        </div>
      )}
    </>
  );
}
