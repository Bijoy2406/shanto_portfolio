'use client';

import { ReactNode } from 'react';
import BonesSkeleton from '@/components/BonesSkeleton';

interface PageContentSectionProps {
  name: string;
  children: ReactNode;
}

export default function PageContentSection({ name, children }: PageContentSectionProps) {
  return (
    <BonesSkeleton name={name} loading={false}>
      {children}
    </BonesSkeleton>
  );
}
