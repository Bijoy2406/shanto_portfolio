'use client';

import HtmlContent from '@/components/HtmlContent';
import BonesSkeleton from '@/components/BonesSkeleton';

interface ProjectsSectionProps {
  overview: string;
  overviewTagline: string;
}

export default function ProjectsSection(props: ProjectsSectionProps) {
  return (
    <BonesSkeleton name="home-projects-section" loading={false}>
      <section className="max-w-[1000px] mx-auto px-8 py-12 text-center scroll-reveal" data-purpose="projects-overview" data-scroll-reveal>
        <h2 className="text-3xl font-medium mb-6 text-on-surface">My Projects Overview</h2>
        <HtmlContent
          html={props.overview}
          className="text-[15px] leading-relaxed text-on-surface-variant text-left mb-6"
        />
        <HtmlContent
          html={props.overviewTagline}
          className="text-[15px] text-on-surface text-left font-medium"
        />
      </section>
    </BonesSkeleton>
  );
}
