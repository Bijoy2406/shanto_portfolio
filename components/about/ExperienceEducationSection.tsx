'use client';

import HtmlContent from '@/components/HtmlContent';
import BonesSkeleton from '@/components/BonesSkeleton';
import type { ExperienceItem, EducationItem } from '@/app/admin-panel/types';

interface ExperienceEducationSectionProps {
  experience: ExperienceItem[];
  education: EducationItem[];
}

function ordered<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export default function ExperienceEducationSection(props: ExperienceEducationSectionProps) {
  if (props.experience.length === 0 && props.education.length === 0) {
    return null;
  }

  return (
    <BonesSkeleton name="about-experience-education" loading={false}>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <div className="scroll-reveal-left" data-scroll-reveal>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              Experience
            </h2>
            {ordered(props.experience).map((e, i) => (
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
            {ordered(props.education).map((ed, i) => (
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
      </div>
    </BonesSkeleton>
  );
}
