'use client';

import HtmlContent from '@/components/HtmlContent';
import BonesSkeleton from '@/components/BonesSkeleton';
import type { CertificationItem, NewsItem } from '@/app/admin-panel/types';

interface AboutDetailsSectionProps {
  skillsSummary?: string;
  certifications: CertificationItem[];
  news: NewsItem[];
}

function ordered<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export default function AboutDetailsSection(props: AboutDetailsSectionProps) {
  return (
    <BonesSkeleton name="about-details-section" loading={false}>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Skills Summary */}
        {props.skillsSummary && (
          <div className="mb-16 scroll-reveal" data-scroll-reveal>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
              Skills Summary
            </h2>
            <HtmlContent
              html={props.skillsSummary}
              className="text-sm text-gray-700 prose prose-sm max-w-none"
            />
          </div>
        )}

        {/* Certifications List */}
        {props.certifications.length > 0 && (
          <div className="mb-16 scroll-reveal" data-scroll-reveal>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
              Certifications
            </h2>
            <ul className="text-sm text-gray-700 space-y-1">
              {ordered(props.certifications).map((c, i) => (
                <li key={c.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>• {c.text}</li>
              ))}
            </ul>
          </div>
        )}

        {/* News */}
        {props.news.length > 0 && (
          <div className="mb-16 scroll-reveal" data-scroll-reveal>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
              News
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              {ordered(props.news).map((n, i) => (
                <li key={n.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <HtmlContent html={n.text} className="inline prose prose-sm max-w-none" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </BonesSkeleton>
  );
}
