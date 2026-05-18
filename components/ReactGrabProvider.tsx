'use client';

import { useEffect } from 'react';

export default function ReactGrabProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize React Grab
    import('react-grab').then((module) => {
      if (module.default) {
        module.default();
      }
    });
  }, []);

  return <>{children}</>;
}
