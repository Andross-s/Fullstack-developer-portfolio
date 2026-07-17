"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

interface ProjectGalleryProps {
  images: string[];
  alt: string;
  prevLabel: string;
  nextLabel: string;
}

export function ProjectGallery({
  images,
  alt,
  prevLabel,
  nextLabel,
}: ProjectGalleryProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current || images.length < 2) return;

    const splide = new Splide(rootRef.current, {
      type: "loop",
      arrows: true,
      pagination: true,
      gap: "1rem",
      i18n: { prev: prevLabel, next: nextLabel },
    });
    splide.mount();

    const refreshTimeout = window.setTimeout(() => {
      splide.refresh();
    }, 250);

    return () => {
      window.clearTimeout(refreshTimeout);
      splide.destroy();
    };
  }, [images, prevLabel, nextLabel]);

  if (images.length < 2) {
    return (
      <div className="relative aspect-[8/5] w-full overflow-hidden rounded-xl bg-surface-muted">
        <Image
          src={images[0]}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 640px, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div ref={rootRef} className="project-gallery splide" aria-label={alt}>
      <div className="splide__track">
        <ul className="splide__list">
          {images.map((src, index) => (
            <li key={src} className="splide__slide">
              <div className="relative aspect-[8/5] w-full overflow-hidden rounded-xl bg-surface-muted">
                <Image
                  src={src}
                  alt={`${alt} ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
