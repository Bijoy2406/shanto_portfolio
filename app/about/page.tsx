import { loadPortfolio } from '../admin-panel/actions';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import ExperienceEducationSection from '@/components/about/ExperienceEducationSection';
import AboutDetailsSection from '@/components/about/AboutDetailsSection';

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

      <AboutHeroSection
        title={about.title}
        profileImageUrl={about.profileImageUrl}
        aboutText={about.aboutText}
        cvUrl={about.cvUrl}
        researchResumeUrl={about.researchResumeUrl}
        badges={badges}
        certificateImageNote={about.certificateImageNote}
      />

      <ExperienceEducationSection
        experience={about.experience}
        education={about.education}
      />

      <AboutDetailsSection
        skillsSummary={about.skillsSummary}
        certifications={about.certificationsList}
        news={about.news}
      />

      <footer className="bg-white border-t border-gray-200 py-8 text-center text-sm text-gray-500 animate-fade-in">
        <p>© 2026 Khondokar Shahriar Shanto. All rights reserved.</p>
      </footer>
    </main>
  );
}
