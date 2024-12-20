import { useState, useEffect } from 'react';

import { ReactNode } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
  [key: string]: any;
}

const ClientOnly = ({ children, ...delegated }: ClientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
};

export default ClientOnly;
