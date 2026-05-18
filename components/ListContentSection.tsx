'use client';

import { ReactNode } from 'react';
import BonesSkeleton from '@/components/BonesSkeleton';

interface ListContentSectionProps {
  name: string;
  children: ReactNode;
  emptyMessage?: string;
  isEmpty?: boolean;
}

export default function ListContentSection({
  name,
  children,
  emptyMessage,
  isEmpty = false,
}: ListContentSectionProps) {
  return (
    <BonesSkeleton name={name} loading={false}>
      {isEmpty && emptyMessage ? (
        <p className="text-center text-sm text-gray-500 italic py-12">{emptyMessage}</p>
      ) : (
        children
      )}
    </BonesSkeleton>
  );
}
