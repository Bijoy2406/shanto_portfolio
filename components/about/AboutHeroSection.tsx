'use client';

import HtmlContent from '@/components/HtmlContent';
import BonesSkeleton from '@/components/BonesSkeleton';
import type { ImageItem } from '@/app/admin-panel/types';

interface AboutHeroSectionProps {
  title?: string;
  profileImageUrl?: string;
  aboutText?: string;
  cvUrl?: string;
  researchResumeUrl?: string;
  badges: ImageItem[];
  certificateImageNote?: string;
}

export default function AboutHeroSection(props: AboutHeroSectionProps) {
  return (
    <BonesSkeleton name="about-hero-section" loading={false}>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Profile Introduction */}
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-start">
          <div className="w-full md:w-1/3 flex flex-col items-center text-center scroll-reveal-left" data-scroll-reveal>
            {props.profileImageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover object-top shadow-lg mb-6 border-4 border-white animate-scale-in"
                src={props.profileImageUrl}
              />
            )}
            <h2 className="text-xl font-bold mb-1 animate-fade-in-up animation-delay-100">{props.title}</h2>
            <div className="flex flex-col gap-3 mt-4 w-full px-8">
              {props.cvUrl && (
                <a
                  className="bg-primary text-white py-2 px-6 rounded text-sm font-medium hover:bg-gray-800 transition-colors scroll-reveal-scale"
                  href={props.cvUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-scroll-reveal
                >
                  Full CV
                </a>
              )}
              {props.researchResumeUrl && (
                <a
                  className="bg-primary text-white py-2 px-6 rounded text-sm font-medium hover:bg-gray-800 transition-colors scroll-reveal-scale"
                  href={props.researchResumeUrl}
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
            <HtmlContent html={props.aboutText ?? ''} />
          </div>
        </div>

        {/* Certifications Badges */}
        {props.badges.length > 0 && (
          <div className="mb-16 text-center scroll-reveal" data-scroll-reveal>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {props.badges.map((b, i) => (
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
              html={props.certificateImageNote ?? ''}
              className="text-sm text-gray-600"
            />
          </div>
        )}
      </div>
    </BonesSkeleton>
  );
}
