'use client';

import { useState } from 'react';
import type { ProjectItem } from '@/app/admin-panel/types';

interface Props {
  project: ProjectItem;
  imageClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
}

export default function ProjectCard({
  project,
  imageClassName = 'w-full h-[200px] object-cover mb-4 rounded',
  containerClassName = 'text-center bg-surface-container-lowest p-2 rounded-lg shadow-sm',
  titleClassName = 'font-bold text-on-surface text-sm',
}: Props) {
  const images = [...project.images].sort((a, b) => a.order - b.order);
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className={containerClassName}>
        <div className={`${imageClassName} bg-surface-container-low flex items-center justify-center text-on-surface-variant text-xs`}>
          No image
        </div>
        <p className={titleClassName}>{project.title}</p>
      </div>
    );
  }

  const isCarousel = images.length > 1;
  const current = images[Math.min(index, images.length - 1)];

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  return (
    <div className={`${containerClassName} relative group overflow-hidden`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={current.alt ?? project.title}
        className={imageClassName}
        src={current.url}
      />
      {isCarousel && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute top-[100px] left-4 w-8 h-8 bg-on-surface/50 rounded-full flex items-center justify-center text-surface-container-lowest cursor-pointer -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <i className="fas fa-chevron-left text-sm" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute top-[100px] right-4 w-8 h-8 bg-on-surface/50 rounded-full flex items-center justify-center text-surface-container-lowest cursor-pointer -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <i className="fas fa-chevron-right text-sm" />
          </button>
          <div className="flex justify-center space-x-2 mb-2">
            {images.map((img, i) => (
              <span
                key={img.id}
                className={`w-2 h-2 rounded-full ${
                  i === index ? 'bg-on-tertiary-container' : 'bg-surface-dim'
                }`}
              />
            ))}
          </div>
        </>
      )}
      <p className={titleClassName}>{project.title}</p>
    </div>
  );
}
