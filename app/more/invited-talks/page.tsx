import { loadPortfolio } from '../../admin-panel/actions';
import HtmlContent from '@/components/HtmlContent';

export const dynamic = 'force-dynamic';

function ordered<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export default async function InvitedTalks() {
  const data = await loadPortfolio();
  const items = ordered(data.invitedTalks);

  return (
    <main className="flex-grow bg-surface min-h-screen">
      <section
        className="py-24 md:py-32 flex justify-center items-center animate-fade-in-up"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2HoJdjV6DcF-cSquOD9sG2KflgHwaUTmDowIUZul6UOQZkAwe5h-7TqjiJGm3JD4r5ALNL6TMu6nhTyE3sGhEKllwjp2iA1M7CBxRo4Aan2sgyLSUswu2igp8LvlHZRxLlqkKqEh46YqOCuG7kXHMuOOp9HMBjcJEq9yKeRJv_SIFVYYuSPax3tWBS4BPdjRK1PVaZh6OAxGPBNM0KSUDy9dNDDrl04Ucb0ELihotVZWBahyUUdW5zSR4Ufqj3B6x1UcFnQUrAUc')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-white text-5xl md:text-6xl font-light tracking-wider uppercase">
          Invited Talks
        </h1>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {items.length === 0 ? (
          <p className="text-center text-sm text-gray-500 italic py-12">
            No invited talks yet.
          </p>
        ) : (
          <div className="space-y-12">
            {items.map((t, i) => (
              <article
                key={t.id}
                className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-8 last:border-0 scroll-reveal"
                data-scroll-reveal
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {t.imageUrl && (
                  <div className="w-full md:w-1/3 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={t.title}
                      className="w-full h-auto object-cover rounded border border-gray-200"
                      src={t.imageUrl}
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3 text-primary">{t.title}</h3>
                  <HtmlContent
                    html={t.description}
                    className="text-gray-700 font-light text-sm leading-relaxed text-justify prose prose-sm max-w-none mb-4"
                  />
                  {t.url && (
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block bg-primary text-white px-6 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-black transition-colors"
                    >
                      Click Here
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <footer className="bg-surface-container-low py-8 text-center border-t border-gray-200 mt-auto animate-fade-in">
        <p className="text-gray-500 text-sm">
          © 2026 Khondokar Shahriar Shanto. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
