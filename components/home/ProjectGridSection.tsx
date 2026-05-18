'use client';

import ProjectCard from '@/components/ProjectCard';
import BonesSkeleton from '@/components/BonesSkeleton';
import type { ProjectItem } from '@/app/admin-panel/types';

interface ProjectGridSectionProps {
  title: string;
  projects: ProjectItem[];
  containerCls?: string;
  bgCls?: string;
  borderCls?: string;
  skeletonName: string;
}

function ordered<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export default function ProjectGridSection(props: ProjectGridSectionProps) {
  const items = ordered(props.projects);
  const containerClass = props.containerCls ?? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
  const bgClass = props.bgCls ?? 'bg-surface-container-low';
  const borderClass = props.borderCls ?? '';

  return (
    <BonesSkeleton name={props.skeletonName} loading={false}>
      <div>
        <h3 className="text-2xl font-bold text-center mb-10 text-on-surface animate-fade-in-up">{props.title}</h3>
        <div className={`${bgClass} p-8 -mx-8 sm:mx-0 mb-16 ${borderClass} rounded-lg scroll-reveal`} data-scroll-reveal>
          {items.length === 0 ? (
            <p className="text-center text-sm text-on-surface-variant italic">
              No projects yet.
            </p>
          ) : (
            <div className={containerClass}>
              {items.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </BonesSkeleton>
  );
}
