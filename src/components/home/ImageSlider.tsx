'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { excellenceSlides } from '@/data/home';
import styles from './ExcellenceSection.module.scss';

const AUTOPLAY_MS = 7500;

export function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = window.setTimeout(
      () => setIndex((current) => (current + 1) % excellenceSlides.length),
      AUTOPLAY_MS,
    );
    return () => window.clearTimeout(id);
  }, [index]);

  return (
    <div className={styles.slider}>
      <div className={styles.viewport}>
        <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
          {excellenceSlides.map((slide, slideIndex) => (
            <Image
              key={slide.id}
              src={slide.image}
              alt=""
              className={styles.slide}
              inert={slideIndex !== index}
            />
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {excellenceSlides.map((slide, slideIndex) => (
          <button
            key={slide.id}
            type="button"
            className={clsx(styles.dot, slideIndex === index && styles.dotActive)}
            aria-label={`Show picture ${slideIndex + 1}`}
            aria-current={slideIndex === index}
            onClick={() => setIndex(slideIndex)}
          />
        ))}
      </div>
    </div>
  );
}
