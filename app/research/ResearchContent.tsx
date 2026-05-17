'use client';

import { useScrollRevealGroup } from '@/hooks/useScrollReveal';
import NumberCounter from '@/components/NumberCounter';
import type { ResearchStats, Research } from '../admin-panel/types';

const STAT_LABELS: { key: keyof ResearchStats; label: string }[] = [
  { key: 'published', label: 'Published' },
  { key: 'underReview', label: 'Under Review' },
  { key: 'citations', label: 'Citations' },
  { key: 'hIndex', label: 'h-index' },
  { key: 'i10Index', label: 'i10-index' },
];

interface ResearchContentProps {
  stats: typeof STAT_LABELS;
  data: Research;
}

export default function ResearchContent({ stats, data }: ResearchContentProps) {
  const ref = useScrollRevealGroup();

  return (
    <section
      ref={ref}
      className="bg-surface-container-low py-16 border-y border-gray-200 text-center scroll-reveal"
      data-scroll-reveal
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-light mb-2 text-primary">{data.statsHeading}</h2>
        {data.publicationYears && (
          <p className="text-gray-500 mb-12 text-sm">{data.publicationYears}</p>
        )}
        <div
          className="grid gap-8 justify-center"
          style={{
            gridTemplateColumns: `repeat(${Math.min(stats.length, 5)}, minmax(0, 1fr))`,
          }}
        >
          {stats.map((s, index) => (
            <div
              key={s.key}
              className="scroll-reveal-scale"
              data-scroll-reveal
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <NumberCounter
                value={Number(data.stats[s.key]) || 0}
                duration={2000}
                className="text-5xl font-light text-[#333333] leading-none mb-2"
              />
              <div className="text-xs uppercase tracking-widest text-gray-500 mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        {data.researchResumeUrl && (
          <div className="mt-12">
            <a
              className="inline-block bg-primary text-white px-8 py-3 text-sm font-semibold tracking-wider hover:bg-gray-800 transition-colors scroll-reveal-scale"
              href={data.researchResumeUrl}
              target="_blank"
              rel="noreferrer"
              data-scroll-reveal
            >
              Research Resume
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
