import { loadPortfolio } from '../admin-panel/actions';
import ListContentSection from '@/components/ListContentSection';
import HtmlContent from '@/components/HtmlContent';

import PageContentSection from '@/components/PageContentSection';
export const dynamic = 'force-dynamic';

function ordered<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export default async function Courses() {
  const data = await loadPortfolio();
  const items = ordered(data.courses);

  return (
    <main className="flex-grow bg-gray-50 min-h-screen flex flex-col">
      <section
        className="relative z-10 animate-fade-in-up"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFl8V2ml-gzpbm5xltx7tkKvIyti5aRcsMVOJv9zYXZ9ZZGWcJcwtGE7pqdqhxVg_UVs9Hb7uzrc6iRJeM5HNruaKisCgVUx7SurEJ-ghSwL-FGvOSK2reihcpRI60zj5LfWv1neXOUnDTN_tJc-DGAjjwCFoQQ1_Yt-cpmWIO-PHHMxplb2F5MZ1b2JA02I-mDFSOWGZwhNGkyx3bZbWQdEOVpxuA4j6B7-pXuzL_7U3pfLdOWJ07bQReDAJzBFQ0tPOQ3WGn4rE')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-light text-white uppercase tracking-widest">Courses</h1>
        </div>
      </section>

      <PageContentSection name="courses-content">
        <div className="flex-grow container mx-auto px-4 py-16">
          {items.length === 0 ? (
            <p className="text-center text-sm text-gray-500 italic py-12">
              No courses yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {items.map((c, i) => (
              <div
                key={c.id}
                className="bg-white rounded overflow-hidden shadow-md flex flex-col scroll-reveal-scale"
                style={{ animationDelay: `${i * 100}ms` }}
                data-scroll-reveal
              >
                <div className="h-64 bg-white flex items-center justify-center p-8 border-b border-gray-100">
                  {c.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      alt={c.title}
                      className="max-h-full max-w-full object-contain"
                      src={c.imageUrl}
                    />
                  ) : (
                    <div className="text-gray-400 text-sm">{c.title}</div>
                  )}
                </div>
                <div className="bg-[#3a3a3a] text-white p-6 text-center flex-grow flex flex-col justify-between">
                  <h3 className="text-xl font-semibold uppercase tracking-wider mb-4">
                    {c.title}
                  </h3>
                  {c.description && (
                    <HtmlContent
                      html={c.description}
                      className="text-sm text-gray-300 mb-4 prose prose-sm prose-invert max-w-none"
                    />
                  )}
                  {c.url && (
                    <div>
                      <a
                        className="inline-block bg-[#2a9d8f] text-white px-6 py-2 rounded-sm text-sm font-medium hover:bg-[#21867a] transition-colors"
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Click Here
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </PageContentSection>

      <footer className="bg-surface-container-low py-8 text-center text-sm text-gray-500 mt-auto animate-fade-in">
        <div className="container mx-auto px-4">
          © 2026 Khondokar Shahriar Shanto.
        </div>
      </footer>
    </main>
  );
}
