'use client';

import { useState, useTransition } from 'react';
import { savePortfolio } from './actions';
import type { PortfolioData, ActionResult } from './types';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ResearchSection from './sections/ResearchSection';
import PublicationsSection from './sections/PublicationsSection';
import AchievementsSection from './sections/AchievementsSection';
import WritingsSection from './sections/WritingsSection';
import CardListSection from './sections/CardListSection';

interface Props {
  initialData: PortfolioData;
  secret: string;
}

type TabKey =
  | 'home'
  | 'about'
  | 'research'
  | 'publications'
  | 'achievements'
  | 'writings'
  | 'courses'
  | 'workshops'
  | 'projects'
  | 'affiliations'
  | 'volunteering'
  | 'invitedTalks';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'research', label: 'Research' },
  { key: 'publications', label: 'Publications' },
  { key: 'achievements', label: 'Achievements' },
  { key: 'writings', label: 'Writings' },
  { key: 'courses', label: 'Courses' },
  { key: 'workshops', label: 'Workshops' },
  { key: 'projects', label: 'Projects' },
  { key: 'affiliations', label: 'Affiliations' },
  { key: 'volunteering', label: 'Volunteering' },
  { key: 'invitedTalks', label: 'Invited Talks' },
];

export default function AdminForm({ initialData, secret }: Props) {
  const [data, setData] = useState<PortfolioData>(initialData);
  const [tab, setTab] = useState<TabKey>('home');
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<ActionResult | null>(null);

  function save() {
    setResult(null);
    startTransition(async () => {
      const res = await savePortfolio(secret, data);
      setResult(res);
      if (res.success) {
        setTimeout(() => setResult(null), 4000);
      }
    });
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Tab nav */}
      <nav
        className="flex flex-wrap gap-1.5 sticky top-0 z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 py-3 -mx-4 px-4 border-b border-outline-variant"
        aria-label="Admin sections"
      >
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
              tab === t.key
                ? 'bg-on-tertiary-container text-surface-container-lowest border-on-tertiary-container'
                : 'bg-surface-container-lowest border-outline-variant text-on-surface hover:bg-surface-container-low'
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {/* Active tab */}
      <div>
        {tab === 'home' && (
          <HomeSection
            data={data.home}
            onChange={(v) => setData({ ...data, home: v })}
            secret={secret}
          />
        )}
        {tab === 'about' && (
          <AboutSection
            data={data.about}
            onChange={(v) => setData({ ...data, about: v })}
            secret={secret}
          />
        )}
        {tab === 'research' && (
          <ResearchSection
            data={data.research}
            onChange={(v) => setData({ ...data, research: v })}
            secret={secret}
          />
        )}
        {tab === 'publications' && (
          <PublicationsSection
            data={data.publications}
            onChange={(v) => setData({ ...data, publications: v })}
            secret={secret}
          />
        )}
        {tab === 'achievements' && (
          <AchievementsSection
            items={data.achievements}
            onChange={(v) => setData({ ...data, achievements: v })}
            secret={secret}
          />
        )}
        {tab === 'writings' && (
          <WritingsSection
            data={data.writings}
            onChange={(v) => setData({ ...data, writings: v })}
          />
        )}
        {tab === 'courses' && (
          <CardListSection
            title="Courses"
            description="Course cards. Add a title, description and a 'Click Here' URL for the button."
            items={data.courses}
            onChange={(v) => setData({ ...data, courses: v })}
            folder="courses"
            secret={secret}
            itemLabel="course"
            withImage={false}
          />
        )}
        {tab === 'workshops' && (
          <CardListSection
            title="Workshops"
            description="Workshop cards: image, heading + short summary, 'Click Here' URL."
            items={data.workshops}
            onChange={(v) => setData({ ...data, workshops: v })}
            folder="workshops"
            secret={secret}
            itemLabel="workshop"
          />
        )}
        {tab === 'projects' && (
          <CardListSection
            title="Projects"
            description="Project cards with small details. Optional image and URL."
            items={data.projectsList}
            onChange={(v) => setData({ ...data, projectsList: v })}
            folder="projects-list"
            secret={secret}
            itemLabel="project"
          />
        )}
        {tab === 'affiliations' && (
          <CardListSection
            title="Affiliations"
            description="Affiliation cards (same shape as workshops)."
            items={data.affiliations}
            onChange={(v) => setData({ ...data, affiliations: v })}
            folder="affiliations"
            secret={secret}
            itemLabel="affiliation"
          />
        )}
        {tab === 'volunteering' && (
          <CardListSection
            title="Volunteering"
            description="Volunteering cards (same shape as workshops)."
            items={data.volunteering}
            onChange={(v) => setData({ ...data, volunteering: v })}
            folder="volunteering"
            secret={secret}
            itemLabel="volunteering entry"
          />
        )}
        {tab === 'invitedTalks' && (
          <CardListSection
            title="Invited Talks"
            description="Invited-talk cards (same shape as workshops)."
            items={data.invitedTalks}
            onChange={(v) => setData({ ...data, invitedTalks: v })}
            folder="invited-talks"
            secret={secret}
            itemLabel="invited talk"
          />
        )}
      </div>

      {/* Sticky save bar */}
      <div className="sticky bottom-0 z-20 -mx-4 px-4 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-outline-variant flex items-center justify-between gap-4">
        <div className="text-xs text-on-surface-variant">
          {result?.success
            ? '✓ Changes published.'
            : result && !result.success
              ? `✗ ${result.error}`
              : 'Click Save to publish your changes to the live site.'}
        </div>
        <button
          type="button"
          onClick={save}
          disabled={isPending}
          className="rounded-lg bg-on-tertiary-container px-8 py-3 text-sm font-bold text-surface-container-lowest transition-opacity hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? 'Saving…' : 'Save & Publish'}
        </button>
      </div>
    </div>
  );
}
