import { loadPortfolio } from '../admin-panel/actions';
import ListContentSection from '@/components/ListContentSection';
import HtmlContent from '@/components/HtmlContent';

import PageContentSection from '@/components/PageContentSection';
export const dynamic = 'force-dynamic';

function ordered<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export default async function Publications() {
  const data = await loadPortfolio();
  const p = data.publications;
  const covers = ordered(p.journalCoverImages);
  const sections = ordered(p.sections);

  return (
    <main className="flex-grow bg-surface min-h-screen">
      <section
        className="py-24 text-center text-white animate-fade-in-up"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8XCirzbBKADJty1VbNx_MccCo_83lkLx6_sa7Mz6hJK3pxQZ8ru39cR2cjS44TtwIj-fRcsFamrBRuj3Nt1ElkbztvhokEaD5UYZKaUKqwdqXHunLAzNnhs_0hoqbwBXTFAFRyj7rIH7NAkNFauf4GnblJVPxGAS7lyTQVu6NYqQ5uL1fTW0V_UiDOTGcDOI4NfBxs_DHb4CCdzor_d-BDCywmQmKbhtmx7LRfxb6P0vcwLTgf-Usxds8hCZLjSEY9iBgDca0SzU')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest">Publications</h1>
      </section>

      <PageContentSection name="publications-content">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 bg-surface-container-lowest shadow-sm my-8 rounded-md border border-outline-variant scroll-reveal" data-scroll-reveal>
          {covers.length > 0 && (
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 mb-12">
              {covers.map((img, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={img.id}
                  alt={img.alt ?? 'Journal Cover'}
                  className="w-full h-auto object-cover border border-outline-variant rounded-sm shadow-sm animate-scale-in"
                  style={{ animationDelay: `${i * 50}ms` }}
                  src={img.url}
                />
              ))}
            </div>
          )}

          {sections.length === 0 && covers.length === 0 && (
            <p className="text-center text-sm text-on-surface-variant italic py-12">
              No publications yet.
            </p>
          )}

          {sections.map((s, i) => (
            <section key={s.id} className="scroll-reveal-left" style={{ animationDelay: `${i * 100}ms` }} data-scroll-reveal>
              <h2 className="text-xl font-bold mt-10 mb-4 border-b-2 border-secondary-container pb-1 bg-surface-container-low p-2">
                {s.title}
              </h2>
              <HtmlContent
                html={s.content}
                className="text-sm leading-relaxed text-gray-800 prose prose-sm max-w-none"
              />
            </section>
          ))}
        </div>
      </PageContentSection>

      <footer className="bg-surface-container-high py-6 text-center text-sm text-secondary border-t border-outline-variant mt-auto animate-fade-in">
        <p>© 2026 Khondokar Shahriar Shanto.</p>
      </footer>
    </main>
  );
}
