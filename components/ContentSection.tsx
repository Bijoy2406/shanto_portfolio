'use client';

import { ReactNode } from 'react';
import BonesSkeleton from '@/components/BonesSkeleton';

interface ContentSectionProps {
  name: string;
  loading?: boolean;
  children: ReactNode;
}

export default function ContentSection({ name, loading = false, children }: ContentSectionProps) {
  return (
    <BonesSkeleton name={name} loading={loading}>
      {children}
    </BonesSkeleton>
  );
}
