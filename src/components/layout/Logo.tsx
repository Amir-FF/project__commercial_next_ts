import clsx from 'clsx';
import Link from 'next/link';
import { BsBuildings } from 'react-icons/bs';

interface LogoProps {
  variant: 'header' | 'footer';
}

export function Logo({ variant }: LogoProps) {
  const isHeader = variant === 'header';

  return (
    <Link href="/" className="flex items-center gap-[2px]" aria-label="Construction Building, home">
      <BsBuildings size={isHeader ? 45 : 50} className={clsx(!isHeader && 'text-navy')} aria-hidden="true" />
      <span className="flex flex-col">
        <span className={isHeader ? 'text-brand' : 'text-navy'}>construction</span>
        <span>building</span>
      </span>
    </Link>
  );
}
