import { loadPortfolio } from '../admin-panel/actions';
import HtmlContent from '@/components/HtmlContent';

export const dynamic = 'force-dynamic';
import PageContentSection from '@/components/PageContentSection';

function ordered<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export default async function Volunteering() {
  const data = await loadPortfolio();
  const items = ordered(data.volunteering);

  return (
    <main className="flex-grow bg-surface min-h-screen font-body antialiased">
      <header className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-surface-container-low overflow-hidden animate-fade-in-up">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#eae7e7] to-[#ffffff] opacity-80"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDP2MSirfjB9QOfdB22Q3B8ObprSdSEGb4v3xs9DhdS00jA8ftnpw-I9_9ctDSkurwjoHn4RBdCXbLFqKJmJkCUP3EdlEHGKpnh0XgXQ_LdHngTwLOxT-Jk8-JUzzi1QD5ThPnD3t4Z49KSBG2ZdvZGsRmZfAQ6yJ84Lhi9pcFT1OKp_OvKVji1YCN2uDK1FWa4zHUOn0smK2bpBaC4j6WE6ufosjX2W9Hv5gtE5527nbYpjV4c1DedXFFZSRGJDdOZQ_xRyqirsrM')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-[48px] font-semibold text-white tracking-[-1.2px] uppercase">
            VOLUNTEERING
          </h1>
        </div>
      </header>

      <PageContentSection name="volunteering-content">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-16">
            {items.length === 0 && (
              <p className="text-sm text-gray-500 italic">No volunteering entries yet.</p>
            )}
            {items.map((v, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={v.id}
                className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-200 pb-12 last:border-0 scroll-reveal"
                data-scroll-reveal
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {v.imageUrl && (
                  <div
                    className={`w-full md:w-1/3 ${reverse ? 'md:order-2' : 'md:order-1'}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={v.title}
                      className="w-full h-auto object-cover rounded border border-gray-200"
                      src={v.imageUrl}
                    />
                  </div>
                )}
                <div
                  className={`flex-1 ${v.imageUrl ? (reverse ? 'md:order-1' : 'md:order-2') : ''}`}
                >
                  <h3 className="text-[24px] font-medium text-primary border-b border-gray-200 pb-2 mb-4 inline-block pr-12">
                    {v.title}
                  </h3>
                  <HtmlContent
                    html={v.description}
                    className="text-[16px] text-gray-600 leading-relaxed mb-6 prose prose-sm max-w-none"
                  />
                  {v.url && (
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block bg-primary text-white px-6 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-black transition-colors"
                    >
                      Click Here
                    </a>
                  )}
                </div>
              </article>
            );
            })}
          </div>
        </div>
      </PageContentSection>
    </main>
  );
}
