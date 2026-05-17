import { loadPortfolio } from '../admin-panel/actions';
import type { ResearchStats } from '../admin-panel/types';
import HtmlContent from '@/components/HtmlContent';
import ResearchContent from './ResearchContent';

export const dynamic = 'force-dynamic';

function ordered<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

const STAT_LABELS: { key: keyof ResearchStats; label: string }[] = [
  { key: 'published', label: 'Published' },
  { key: 'underReview', label: 'Under Review' },
  { key: 'citations', label: 'Citations' },
  { key: 'hIndex', label: 'h-index' },
  { key: 'i10Index', label: 'i10-index' },
];

export default async function Research() {
  const data = await loadPortfolio();
  const r = data.research;
  const badges = ordered(r.badges);
  const stats = STAT_LABELS.filter(
    (s) => r.stats[s.key] !== undefined && r.stats[s.key] !== '',
  );

  return (
    <main className="flex-grow bg-surface min-h-screen">
      {/* Hero */}
      <section
        className="py-24 md:py-32 flex justify-center items-center animate-fade-in-up"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2HoJdjV6DcF-cSquOD9sG2KflgHwaUTmDowIUZul6UOQZkAwe5h-7TqjiJGm3JD4r5ALNL6TMu6nhTyE3sGhEKllwjp2iA1M7CBxRo4Aan2sgyLSUswu2igp8LvlHZRxLlqkKqEh46YqOCuG7kXHMuOOp9HMBjcJEq9yKeRJv_SIFVYYuSPax3tWBS4BPdjRK1PVaZh6OAxGPBNM0KSUDy9dNDDrl04Ucb0ELihotVZWBahyUUdW5zSR4Ufqj3B6x1UcFnQUrAUc')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-white text-5xl md:text-6xl font-light tracking-wider uppercase">Research</h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center scroll-reveal-left" data-scroll-reveal>
          {r.tagCloudImageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt="Research tag cloud"
              className="max-w-full h-auto mix-blend-multiply"
              src={r.tagCloudImageUrl}
            />
          ) : (
            <div className="w-full max-w-sm aspect-square bg-surface-container-low rounded-lg flex items-center justify-center text-on-surface-variant text-sm">
              Tag cloud image
            </div>
          )}
        </div>
        <div className="scroll-reveal-right" data-scroll-reveal>
          <h2 className="text-3xl font-light mb-6 text-primary border-b border-gray-200 pb-2">
            Research Interests
          </h2>
          <HtmlContent
            html={r.interestsText}
            className="text-gray-700 font-light leading-relaxed prose prose-sm max-w-none"
          />
        </div>
      </section>

      {badges.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-16 scroll-reveal" data-scroll-reveal>
          <div className="flex flex-wrap justify-center gap-2 text-xs font-semibold text-white">
            {badges.map((b, i) => (
              <span
                key={b.id}
                className={`${b.colorClass} px-3 py-1 rounded animate-fade-in-up`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {b.label}
              </span>
            ))}
          </div>
        </section>
      )}

      {stats.length > 0 && (
        <ResearchContent stats={stats} data={r} />
      )}

      {r.featuredResearch.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 py-16 scroll-reveal" data-scroll-reveal>
          <h2 className="text-3xl font-light text-center mb-12 border-b border-gray-200 pb-4">
            Featured Research
          </h2>
          <div className="space-y-12">
            {ordered(r.featuredResearch).map((item, i) => (
              <article
                key={item.id}
                className="scroll-reveal-left"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="text-xl font-medium mb-3 text-primary">{item.title}</h3>
                <HtmlContent
                  html={item.description}
                  className="text-gray-700 font-light text-sm leading-relaxed text-justify prose prose-sm max-w-none"
                />
              </article>
            ))}
          </div>
        </section>
      )}

      <footer className="bg-primary text-white py-8 text-center text-sm font-light">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 Khondokar Shahriar Shanto. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
