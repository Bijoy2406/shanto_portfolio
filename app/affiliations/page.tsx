import { loadPortfolio } from '../admin-panel/actions';
import HtmlContent from '@/components/HtmlContent';

export const dynamic = 'force-dynamic';

function ordered<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export default async function Affiliations() {
  const data = await loadPortfolio();
  const items = ordered(data.affiliations);

  return (
    <main className="flex-grow bg-surface min-h-screen flex flex-col">
      <section
        className="py-24 relative flex items-center justify-center border-b-4 border-[#c5a880] animate-fade-in-up"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYs9TcdY39TEK9mqidFlfbZL1TcrK4VoedkbfagtrA_o6JbjgZjqd66w4CXZWW4w_54pJrnIRyLE_gtbOR7Krf5nRsTCZTST0x_pE2NDhiNqSFFIyQEE5tUHZcyIvpyt2cncJgUOEIa1BQ_GqLFtmMxihgaC7_MGnOkMHGeSIC36ZhuuTl_xfAbardOK8pajIDaTmSdOAD8F7HIhCVnp8cYamJOGjEaIIRN2gQ6ZLPRm-XLDN5XmEiMyGYXqRsiHYib5XRAJQf_b0')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-widest text-white uppercase border-b border-[#c5a880] pb-4 inline-block">
            Affiliations
          </h1>
        </div>
      </section>

      <div className="flex-grow container mx-auto px-4 py-16 max-w-5xl">
        {items.length === 0 && (
          <p className="text-center text-sm text-gray-500 italic py-12">
            No affiliations yet.
          </p>
        )}
        <div className="space-y-16">
          {items.map((a, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={a.id}
                className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-start gap-8 scroll-reveal`}
                data-scroll-reveal
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="bg-white p-2 border border-gray-200 shadow-md">
                    {a.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        alt={a.title}
                        className="w-full h-auto object-cover border border-gray-100"
                        src={a.imageUrl}
                      />
                    ) : (
                      <div className="aspect-square flex items-center justify-center text-gray-400 text-sm">
                        No image
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-serif text-gray-800 mb-2 border-b border-gray-200 pb-2">
                      {a.title}
                    </h2>
                    <HtmlContent
                      html={a.description}
                      className="text-sm text-gray-700 leading-relaxed mb-6 prose prose-sm max-w-none"
                    />
                  </div>
                  {a.url && (
                    <div>
                      <a
                        className="inline-flex items-center px-4 py-2 bg-[#1a252f] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
                        href={a.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Click Here
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <footer className="bg-white py-6 border-t border-gray-200 mt-auto animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Khondokar Shahriar Shanto. Built using WordPress and the Highlight Theme
          </p>
        </div>
      </footer>
    </main>
  );
}
