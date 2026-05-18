import { loadPortfolio } from '../admin-panel/actions';
import HtmlContent from '@/components/HtmlContent';

export const dynamic = 'force-dynamic';
import PageContentSection from '@/components/PageContentSection';

function ordered<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export default async function Workshops() {
  const data = await loadPortfolio();
  const items = ordered(data.workshops);

  return (
    <main className="flex-grow bg-surface min-h-screen font-body antialiased">
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden border-b border-[#eceae4] animate-fade-in-up">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Workshop hero"
            className="w-full h-full object-cover opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgSfnmqrYHqb1GDZ4ekSLfeNbE7A6q9J38NROiSULmp-wsqSSdG7vEca5vsW_R55SZCbPIWqlaXcpj7xlm_VCoo9TofU1VfSaNylBUM_IAmy-oQlOwtZ7NEREjBODUd5n7kUwWhMCGa6uHz5AWQAb7mCgKt19Htf3x-2ik2VqWbU6xd5N4YL9Vec_F8nQwBNVYtdp-R02Mul8HtVBPr06uu2aMmdxr9264IXeTaK84nsWyko3ZQ8n9EXCY0B5Mq-y-XSPSW6kzivk"
          />
          <div className="absolute inset-0 bg-[#fcf9f8]/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-semibold text-5xl md:text-[60px] tracking-[-1.5px] leading-[1.1] text-primary mb-4 uppercase">
            WORKSHOPS
          </h1>
        </div>
      </section>

      <PageContentSection name="workshops-content">
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
          {items.length === 0 && (
            <p className="text-center text-sm text-gray-500 italic">No workshops yet.</p>
          )}
          {items.map((w, i) => {
          const imageFirst = i % 2 === 0;
          return (
            <section
              key={w.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-reveal"
              data-scroll-reveal
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className={`${
                  imageFirst ? 'order-2 md:order-1' : 'order-2'
                } relative rounded-xl overflow-hidden border border-[#eceae4] group scroll-reveal-scale`}
                data-scroll-reveal
              >
                <div className="aspect-[4/3] bg-surface-container-low relative">
                  {w.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      alt={w.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={w.imageUrl}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-on-surface-variant text-sm">
                      No image
                    </div>
                  )}
                </div>
              </div>
              <div
                className={`${
                  imageFirst ? 'order-1 md:order-2' : 'order-1'
                } space-y-6 scroll-reveal-left`}
                data-scroll-reveal
              >
                <h2 className="font-semibold text-4xl tracking-[-1.2px] leading-tight text-primary">
                  {w.title}
                </h2>
                <HtmlContent
                  html={w.description}
                  className="text-base text-secondary leading-relaxed prose prose-sm max-w-none"
                />
                {w.url && (
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-primary text-white px-6 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-black transition-colors"
                  >
                    Click Here
                  </a>
                )}
              </div>
            </section>
          );
          })}
        </div>
      </PageContentSection>
    </main>
  );
}
