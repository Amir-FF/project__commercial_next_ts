'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { BsList, BsSearch } from 'react-icons/bs';
import { navItems } from '@/data/site';
import styles from './Header.module.scss';
import { Logo } from './Logo';

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const currentPath = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  const activeIndex = navItems.findIndex((item) => item.href === currentPath);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: hook up site search.
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo variant="header" />

        <nav className={styles.nav} aria-label="Main">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(styles.link, index === activeIndex && styles.active)}
              aria-current={index === activeIndex ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <BsList size={48} aria-hidden="true" />
        </button>

        <form className={styles.search} role="search" onSubmit={handleSearch}>
          <button type="submit" className={styles.searchButton} aria-label="Search">
            <BsSearch size={16} aria-hidden="true" />
          </button>
          <input type="search" name="search" placeholder="search..." aria-label="Search" className={styles.searchInput} />
        </form>
      </div>

      {menuOpen && (
        <div className={styles.drawer} role="dialog" aria-modal="true" aria-label="Menu">
          <div className={styles.panel}>
            <div className={styles.menuLabel}>menu</div>
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>
                <div
                  className={clsx(
                    styles.drawerItem,
                    (index === activeIndex || index === activeIndex - 1) && styles.drawerItemActive,
                  )}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
          <button type="button" className={styles.backdrop} aria-label="Close menu" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
