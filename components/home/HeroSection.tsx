'use client';

import HtmlContent from '@/components/HtmlContent';
import type { ImageItem, ProjectItem, SocialLinks } from '@/app/admin-panel/types';
import BonesSkeleton from '@/components/BonesSkeleton';

function SocialIcons({ links }: { links: SocialLinks }) {
  const entries: { href?: string; cls: string; icon: string }[] = [
    { href: links.linkedin, cls: 'text-[#0077b5]', icon: 'fab fa-linkedin' },
    { href: links.google, cls: 'text-[#db4437]', icon: 'fab fa-google' },
    { href: links.github, cls: 'text-on-surface', icon: 'fab fa-github' },
    { href: links.facebook, cls: 'text-[#1877f2]', icon: 'fab fa-facebook' },
  ];
  return (
    <div className="flex space-x-3 mb-4">
      {entries
        .filter((e) => e.href)
        .map((e, i) => (
          <a
            key={i}
            href={e.href}
            className={`${e.cls} hover:opacity-80 transition-opacity`}
            target="_blank"
            rel="noreferrer"
          >
            <i className={`${e.icon} text-2xl`} />
          </a>
        ))}
    </div>
  );
}

interface HomeHeroSectionProps {
  hiText?: string;
  profileImageUrl?: string;
  bioParagraph1?: string;
  bioParagraph2?: string;
  interestsLabel?: string;
  interests?: string;
  expertiseLabel?: string;
  expertise?: string;
  socialLinks: SocialLinks;
  resumeUrl?: string;
  badges: ImageItem[];
}

export default function HeroSection(props: HomeHeroSectionProps) {
  return (
    <BonesSkeleton name="home-hero-section" loading={false}>
      <section className="max-w-[1200px] mx-auto px-8 pt-16 pb-12" data-purpose="hero-section">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start justify-center">
          {/* Profile Column */}
          <div className="flex flex-col items-center flex-shrink-0 order-1 scroll-reveal-left" data-scroll-reveal>
            {props.profileImageUrl && (
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-md border-4 border-surface-container-lowest animate-scale-in">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Profile"
                  className="w-full h-full object-cover object-top"
                  src={props.profileImageUrl}
                />
              </div>
            )}
            <SocialIcons links={props.socialLinks} />
            {props.resumeUrl && (
              <a
                className="text-on-tertiary-container font-semibold hover:underline border-b border-on-tertiary-container pb-1 scroll-reveal-left animation-delay-200"
                href={props.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                See My Resume
              </a>
            )}
          </div>

          {/* Bio Column */}
          <div className="max-w-3xl order-2 scroll-reveal-right" data-scroll-reveal>
            <h2 className="text-2xl text-on-tertiary-container mb-4 animate-fade-in-up">{props.hiText}</h2>
            <HtmlContent
              html={props.bioParagraph1 ?? ''}
              className="text-[17px] leading-relaxed mb-6 font-medium text-on-surface animate-fade-in-up animation-delay-100"
            />
            <HtmlContent
              html={props.bioParagraph2 ?? ''}
              className="text-[15px] leading-relaxed mb-8 text-on-surface-variant animate-fade-in-up animation-delay-200"
            />
            <div className="text-center mb-6 animate-fade-in-up animation-delay-300">
              <p className="text-sm font-semibold italic underline mb-2 text-on-surface-variant/80">
                {props.interestsLabel}
              </p>
              <HtmlContent
                html={props.interests ?? ''}
                className="text-sm font-semibold italic text-on-surface"
              />
            </div>
            <div className="text-center mb-8 animate-fade-in-up animation-delay-400">
              <p className="text-sm font-semibold italic underline mb-2 text-on-surface-variant/80">
                {props.expertiseLabel}
              </p>
              <HtmlContent
                html={props.expertise ?? ''}
                className="text-sm font-semibold italic text-on-surface"
              />
            </div>
            {props.badges.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4">
                {props.badges.map((b, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={b.id}
                    alt={b.alt ?? 'Badge'}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-outline-variant shadow-sm object-cover animate-scale-in"
                    style={{ animationDelay: `${i * 100}ms` }}
                    src={b.url}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </BonesSkeleton>
  );
}
