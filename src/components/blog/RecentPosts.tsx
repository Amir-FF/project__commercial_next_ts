'use client';

import Image from 'next/image';
import type { FormEvent } from 'react';
import { CalendarIcon, SearchThinIcon } from '@/components/ui/icons';
import { recentPosts } from '@/data/posts';
import styles from './Blog.module.scss';

export function RecentPosts() {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: hook up post search.
  };

  return (
    <aside className={styles.sidebar}>
      <form className={styles.search} role="search" onSubmit={handleSearch}>
        <input type="search" name="search" placeholder="Keyword search..." aria-label="Keyword search" />
        <button type="submit" aria-label="Search">
          <SearchThinIcon />
        </button>
      </form>

      <h2 className={styles.sidebarTitle}>Recent Posts</h2>

      <div className={styles.recentList}>
        {recentPosts.map((post) => (
          <div key={post.id} className={styles.recentItem}>
            <div className={styles.recentRow}>
              <div className={styles.recentText}>
                <p className={styles.recentTitle}>{post.title}</p>
                <div className={styles.recentTime}>
                  <CalendarIcon />
                  <span>{post.date}</span>
                </div>
              </div>
              <div className={styles.recentImage}>
                <Image src={post.image} alt="" className="h-auto w-full" />
              </div>
            </div>
            <div className={styles.divider}>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
