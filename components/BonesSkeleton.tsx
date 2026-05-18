'use client';

import { Skeleton } from 'boneyard-js/react';
import { ReactNode, ComponentProps } from 'react';

type BoneyardSkeletonProps = ComponentProps<typeof Skeleton>;

interface BonesSkeltonProps extends Omit<BoneyardSkeletonProps, 'name' | 'children' | 'loading'> {
  name: string;
  children: ReactNode;
  loading?: boolean;
}

export default function BonesSkeleton({ name, children, loading = false, ...props }: BonesSkeltonProps) {
  return (
    <Skeleton name={name} loading={loading} {...props}>
      {children}
    </Skeleton>
  );
}
