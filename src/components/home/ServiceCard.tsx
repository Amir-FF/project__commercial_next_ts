'use client';

import clsx from 'clsx';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import type { CSSProperties } from 'react';
import { useInView } from '@/hooks/useInView';
import styles from './Services.module.scss';

interface ServiceCardProps {
  title: string;
  image: StaticImageData;
  index: number;
}

export function ServiceCard({ title, image, index }: ServiceCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '0px 0px -59px 0px' });

  return (
    // The outer element only handles the scroll-in animation, so it can't clash
    // with the hover transition on the card itself.
    <div
      ref={ref}
      className={clsx(styles.reveal, inView ? styles.visible : styles.hidden)}
      style={{ '--delay': `${index * 625}ms` } as CSSProperties}
    >
      <article className={styles.card}>
        <Image src={image} alt="" className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.linkWrap}>
          <a href="#" className={styles.link}>
            <span className={styles.word}>More information</span>
            <span className={styles.plus} aria-hidden="true">
              +
            </span>
          </a>
        </div>
      </article>
    </div>
  );
}
