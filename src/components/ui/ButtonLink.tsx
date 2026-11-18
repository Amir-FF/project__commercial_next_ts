import clsx from 'clsx';
import Link from 'next/link';
import type { ReactNode } from 'react';
import styles from './ButtonLink.module.scss';

export type ButtonVariant = 'orange' | 'navy' | 'navyInvert' | 'outlineOrange' | 'blogNavy';

interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({ href, variant = 'orange', className, children }: ButtonLinkProps) {
  return (
    <Link href={href} className={clsx(styles.button, styles[variant], className)}>
      {children}
    </Link>
  );
}
