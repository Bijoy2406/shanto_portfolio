import { loadPortfolio } from '../admin-panel/actions';
import HtmlContent from '@/components/HtmlContent';

export const dynamic = 'force-dynamic';

function ordered<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export default async function About() {
  const data = await loadPortfolio();
  const about = data.about;
  const badges = ordered(data.home.badges);

  return (
    <main className="flex-1 bg-surface min-h-screen">
      {/* Hero Section */}
      <section
        className="py-24 text-center animate-fade-in-up"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9AwJ0kV0pZQORpXXtK7cq1pwiHL_QNC-2SqdP05r-PRZBRdlOr9ZoI3JkTuJzbYGbPIFLXLzVKwbqU_sgN5wuvbkxJWZ1LS82coK4TjRrtxSwgTvLJ1x036AdyF4XIjg3aRnuTabsYRbqZ1zhbLI_2wtRs3WcC7A_RLfXs_MbbJyFzm4eZZb1UdiaXxQqxBzP57waWO3wcpaye8Zo2VazwjbQDfxQxiqi0vAyidFslrbgSHrndUXdlbmnEdV-8rJySv4s8o8TNbo')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-5xl font-bold text-white tracking-widest uppercase">ABOUT</h1>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Profile Introduction */}
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-start">
          <div className="w-full md:w-1/3 flex flex-col items-center text-center scroll-reveal-left" data-scroll-reveal>
            {about.profileImageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover object-top shadow-lg mb-6 border-4 border-white animate-scale-in"
                src={about.profileImageUrl}
              />
            )}
            <h2 className="text-xl font-bold mb-1 animate-fade-in-up animation-delay-100">{about.title}</h2>
            <div className="flex flex-col gap-3 mt-4 w-full px-8">
              {about.cvUrl && (
                <a
                  className="bg-primary text-white py-2 px-6 rounded text-sm font-medium hover:bg-gray-800 transition-colors scroll-reveal-scale"
                  href={about.cvUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-scroll-reveal
                >
                  Full CV
                </a>
              )}
              {about.researchResumeUrl && (
                <a
                  className="bg-primary text-white py-2 px-6 rounded text-sm font-medium hover:bg-gray-800 transition-colors scroll-reveal-scale"
                  href={about.researchResumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-scroll-reveal
                >
                  Research Resume
                </a>
              )}
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-4 text-gray-700 text-sm md:text-base scroll-reveal-right" data-scroll-reveal>
            <HtmlContent html={about.aboutText} />
          </div>
        </div>

        {/* Certifications Badges (shared with Home) */}
        {badges.length > 0 && (
          <div className="mb-16 text-center scroll-reveal" data-scroll-reveal>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {badges.map((b, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={b.id}
                  alt={b.alt ?? 'Certification'}
                  className="w-[100px] h-[100px] object-contain animate-scale-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                  src={b.url}
                />
              ))}
            </div>
            <HtmlContent
              html={about.certificateImageNote}
              className="text-sm text-gray-600"
            />
          </div>
        )}

        {/* Experience & Education Split */}
        {(about.experience.length > 0 || about.education.length > 0) && (
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Experience */}
            <div className="scroll-reveal-left" data-scroll-reveal>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
                Experience
              </h2>
              {ordered(about.experience).map((e, i) => (
                <div key={e.id} className="mb-6 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <h3 className="font-bold text-gray-800">{e.organization}</h3>
                  {e.role && (
                    <p className="text-sm text-gray-600 font-medium mb-1">{e.role}</p>
                  )}
                  {e.pi && (
                    <p className="text-sm text-gray-500 mb-2">{e.pi}</p>
                  )}
                  <HtmlContent
                    html={e.bullets}
                    className="text-sm text-gray-700 space-y-1 prose prose-sm max-w-none"
                  />
                </div>
              ))}
            </div>
            {/* Education */}
            <div className="scroll-reveal-right" data-scroll-reveal>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
                Education
              </h2>
              {ordered(about.education).map((ed, i) => (
                <div key={ed.id} className="mb-6 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <h3 className="font-bold text-gray-800">{ed.institution}</h3>
                  {ed.degree && (
                    <p className="text-sm text-gray-700 mb-1">{ed.degree}</p>
                  )}
                  {ed.department && (
                    <p className="text-sm text-gray-600 font-medium mb-1">{ed.department}</p>
                  )}
                  {ed.period && (
                    <p className="text-sm text-gray-600 mb-2">{ed.period}</p>
                  )}
                  {ed.details && (
                    <HtmlContent
                      html={ed.details}
                      className="text-sm text-gray-700 prose prose-sm max-w-none"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Summary */}
        {about.skillsSummary && (
          <div className="mb-16 scroll-reveal" data-scroll-reveal>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
              Skills Summary
            </h2>
            <HtmlContent
              html={about.skillsSummary}
              className="text-sm text-gray-700 prose prose-sm max-w-none"
            />
          </div>
        )}

        {/* Certifications List */}
        {about.certificationsList.length > 0 && (
          <div className="mb-16 scroll-reveal" data-scroll-reveal>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
              Certifications
            </h2>
            <ul className="text-sm text-gray-700 space-y-1">
              {ordered(about.certificationsList).map((c, i) => (
                <li key={c.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>• {c.text}</li>
              ))}
            </ul>
          </div>
        )}

        {/* News */}
        {about.news.length > 0 && (
          <div className="mb-16 scroll-reveal" data-scroll-reveal>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
              News
            </h2>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              {ordered(about.news).map((n, i) => (
                <li key={n.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <HtmlContent html={n.text} className="inline prose prose-sm max-w-none" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <footer className="bg-white border-t border-gray-200 py-8 text-center text-sm text-gray-500 animate-fade-in">
        <p>© 2026 Khondokar Shahriar Shanto. All rights reserved.</p>
      </footer>
    </main>
  );
}
