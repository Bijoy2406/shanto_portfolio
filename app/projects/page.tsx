import { loadPortfolio } from '../admin-panel/actions';
import ListContentSection from '@/components/ListContentSection';
import HtmlContent from '@/components/HtmlContent';

import PageContentSection from '@/components/PageContentSection';
export const dynamic = 'force-dynamic';

function ordered<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export default async function Projects() {
  const data = await loadPortfolio();
  const items = ordered(data.projectsList);

  return (
    <main className="flex-grow bg-gray-50 min-h-screen flex flex-col">
      <section
        className="relative text-white animate-fade-in-up"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.8)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCz73MuK8AH1Fz20hZMNqhUAwGQ7Id7oZcmzfD1dg-aqdp0VHZ6_aDS3ga97-xD61mkRREJOzWox2sK9XmUt7iJb4_kJdaSJPtse7p5ss-HCvpiRrZKbYsBISoBhMS2PiZ6p25gQENXurLgR0_GSXlLZUFX5K3gCQtj-UPzK7H1mF8PQUzTt_Pay-xWbyQtsVObEebRKqyH7M02hu2w5YAdUFn4cQavPW4Fl5IWaQNJjbdi_x0E2lW6FHOf3qGqs_OURJy8LnRWq54')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto max-w-7xl px-4 py-32 md:py-48 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-light uppercase tracking-widest mb-4">
            Projects
          </h1>
        </div>
      </section>

      <PageContentSection name="projects-content">
        <div className="flex-grow container mx-auto max-w-7xl px-4 py-16">
          {items.length === 0 ? (
            <p className="text-center text-sm text-gray-500 italic py-12">
              No projects yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((p, i) => (
                <div
                  key={p.id}
                  className="bg-[#1c1c24] rounded-lg overflow-hidden shadow-lg border border-gray-800 flex flex-col h-full group relative scroll-reveal-scale"
                  style={{ animationDelay: `${i * 100}ms` }}
                  data-scroll-reveal
                >
                  <div className="h-48 overflow-hidden bg-white flex items-center justify-center p-4">
                    {p.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        alt={p.title}
                        className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                        src={p.imageUrl}
                      />
                    ) : (
                      <div className="text-gray-400 text-sm">No image</div>
                    )}
                  </div>
                <div className="p-8 text-center flex-grow flex flex-col items-center">
                  <h3 className="text-white text-xl font-bold tracking-wider mb-2 uppercase">
                    {p.title}
                  </h3>
                  <div className="w-8 h-1 bg-amber-400 mb-6" />
                  <HtmlContent
                    html={p.description}
                    className="text-gray-400 text-sm mb-8 flex-grow prose prose-sm prose-invert max-w-none"
                  />
                  {p.url && (
                    <a
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-6 py-2 rounded transition-colors uppercase tracking-wider"
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      See All
                    </a>
                  )}
                </div>
              </div>
            ))}
            </div>
            )}
        </div>
      </PageContentSection>

      <footer className="bg-gray-100 py-6 border-t border-gray-200 mt-auto animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Khondokar Shahriar Shanto.
          </p>
        </div>
      </footer>
    </main>
  );
}
