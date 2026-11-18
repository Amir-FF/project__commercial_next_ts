import clsx from 'clsx';
import type { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={clsx('my-[10px] text-center text-[2rem] font-bold leading-[2]', className)}>
      {children}
    </h2>
  );
}
