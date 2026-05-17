'use client';

import { Skeleton } from 'boneyard-js/react';
import { useState, useEffect, type ReactNode, type ComponentProps } from 'react';
import '../bones/registry';

type BoneyardSkeletonProps = ComponentProps<typeof Skeleton>;

interface ClientSkeletonProps extends Omit<BoneyardSkeletonProps, 'name' | 'loading' | 'children'> {
  name: string;
  loading?: boolean;
  children: ReactNode;
}

export default function ClientSkeleton({ name, loading = false, children, ...props }: ClientSkeletonProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <>{children}</>;
  }

  return (
    <Skeleton name={name} loading={loading} {...props}>
      {children}
    </Skeleton>
  );
}
