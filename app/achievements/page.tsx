import { loadPortfolio } from '../admin-panel/actions';
import HtmlContent from '@/components/HtmlContent';

export const dynamic = 'force-dynamic';

function ordered<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export default async function Achievements() {
  const data = await loadPortfolio();
  const items = ordered(data.achievements);

  return (
    <main className="flex-grow bg-[#fcf9f8] min-h-screen">
      <div className="relative bg-black h-64 flex items-center justify-center overflow-hidden animate-fade-in-up">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOh48I7klbfKKnmfxV7VXi9SD_hxEWeo01x8nMzsUM0uQ6hr8-S9rKpjBF3aVHJzMZUNbjj4TNLqDWKcnqj4URVzowZzeTMsXsrNF2sFiQy906NGnxOMEBnzLVsvs_msb7SJvDNN3ep84Ki4qwnspUlbQcMIiTta3xvXdkrP1qSOFy1MfU47dymnwP3ALnYHevoTcrnZJxYde3gjT8oAgPwf4tcGe-2-MFRgt6jzErrt11d00iYMFLA1DKdRuFucXhSoilBYzt_Go')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <h1 className="relative z-10 text-4xl text-white font-light uppercase tracking-[0.2em] font-serif">
          ACHIEVEMENTS
        </h1>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4">
        {items.length === 0 && (
          <p className="text-center text-sm text-gray-500 italic py-12">
            No achievements yet.
          </p>
        )}
        {items.map((a, i) => (
          <article
            key={a.id}
            className="flex flex-col md:flex-row gap-12 mb-20 border-b border-gray-200 pb-16 scroll-reveal"
            data-scroll-reveal
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="md:w-2/3 scroll-reveal-left" data-scroll-reveal>
              <h2 className="text-2xl text-[#3b5998] mb-2 font-semibold font-serif">{a.title}</h2>
              {a.subtitle && (
                <h3 className="text-lg font-medium mb-4 font-serif">{a.subtitle}</h3>
              )}
              <HtmlContent
                html={a.description}
                className="text-gray-700 leading-relaxed text-sm mb-6 prose prose-sm max-w-none"
              />
              {a.seeMoreUrl && (
                <a
                  href={a.seeMoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#2a3b5c] text-white px-6 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#1a2b4c] transition-colors rounded-sm"
                >
                  SEE MORE
                </a>
              )}
            </div>
            {a.imageUrl && (
              <div className="md:w-1/3 flex items-start justify-center scroll-reveal-right" data-scroll-reveal>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={a.title}
                  className="w-full max-w-sm object-cover border border-gray-200 p-2 bg-white shadow-sm"
                  src={a.imageUrl}
                />
              </div>
            )}
          </article>
        ))}
      </div>

      <footer className="bg-[#f0f0f0] py-6 text-center border-t border-gray-200 animate-fade-in">
        <p className="text-sm text-gray-500">© 2026 Khondokar Shahriar Shanto. Built using WordPress and the Highlight Theme</p>
      </footer>
    </main>
  );
}
