import { loadPortfolio } from '../admin-panel/actions';
import HtmlContent from '@/components/HtmlContent';

export const dynamic = 'force-dynamic';

export default async function Writings() {
  const data = await loadPortfolio();
  const w = data.writings;

  return (
    <main className="flex-grow bg-surface min-h-screen">
      <section
        className="py-32 md:py-48 text-center text-white animate-fade-in-up"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0NwGllLJ4o9Z4AxbWFyFeovwKx726YEtbX2J4BAQvnAISc3_ij0PQn9ZVJ0Am_X8TmzLOrehjuPHPE4TTN_2SkmOlgw9IGtkLquUwb7v4YuxUWrVTqeCJSXYbN_1TkZJ9ORnFDD1lIajfGsqGKUUHExStD9RlT8CMGhvGL1eWFujsYyMvJzIuM-Zo5Zgl7closZgKQn9kSvwa_87Tu5lVPpnpyn6QtnmWlenlyJXiW6vP-V8cswYPCKy-uOjW2Mu0G1WV3C5GhqY')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-4xl md:text-5xl font-light tracking-widest uppercase">Writings</h1>
      </section>

      <div className="container mx-auto px-6 py-16 md:py-24 scroll-reveal" data-scroll-reveal>
        <div className="max-w-5xl mx-auto">
          <HtmlContent
            html={w.content}
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          />
        </div>
      </div>

      <footer className="bg-surface-container-low py-8 text-center border-t border-gray-200 mt-auto animate-fade-in">
        <p className="text-gray-500 text-sm">
          © 2026 Khondokar Shahriar Shanto. Built using WordPress and the Highlight Theme
        </p>
      </footer>
    </main>
  );
}
