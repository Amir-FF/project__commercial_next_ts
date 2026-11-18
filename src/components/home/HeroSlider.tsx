'use client';

import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { ChevronRightIcon } from '@/components/ui/icons';
import { heroSlides } from '@/data/home';
import styles from './HeroSlider.module.scss';

const SLIDE_COUNT = heroSlides.length;
const TRANSITION_MS = 500;
const AUTOPLAY_MS = 7500;

// [last, ...slides, first]: the clones at both ends let the slider wrap around
// while always sliding in the direction the user pressed.
const track = [...heroSlides.slice(-1), ...heroSlides, ...heroSlides.slice(0, 1)];

function HeroContent() {
  return (
    <div className={styles.row}>
      <div className={styles.content}>
        <h1 className={styles.title}>Project management</h1>
        <div className={styles.line}>
          <hr />
        </div>
        <p className={styles.text}>
          Lorem Ipsum is a fabricated text produced by the printing industry with the help of graphic
          designers and printers, and also newspapers and magazines in columns and rows as required.
        </p>
        <div className={styles.buttons}>
          <ButtonLink href="#" variant="orange">
            Continue reading
          </ButtonLink>
          <ButtonLink href="/contact-us" variant="navy">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

export function HeroSlider() {
  // Index into `track`; real slides live at 1..SLIDE_COUNT.
  const [position, setPosition] = useState(1);
  const [animated, setAnimated] = useState(true);
  const lockedRef = useRef(false);

  const activeIndex = (position - 1 + SLIDE_COUNT) % SLIDE_COUNT;

  const goTo = useCallback((nextPosition: number) => {
    if (lockedRef.current) return;
    lockedRef.current = true;

    setAnimated(true);
    setPosition(nextPosition);

    window.setTimeout(() => {
      // Landed on a clone: jump (without animating) to the matching real slide.
      if (nextPosition === 0) {
        setAnimated(false);
        setPosition(SLIDE_COUNT);
      } else if (nextPosition === SLIDE_COUNT + 1) {
        setAnimated(false);
        setPosition(1);
      }
      lockedRef.current = false;
    }, TRANSITION_MS);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = window.setTimeout(() => goTo(position + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [position, goTo]);

  return (
    <section className={styles.hero} aria-roledescription="carousel" aria-label="Featured projects">
      <button
        type="button"
        className={clsx(styles.arrow, styles.prev)}
        aria-label="Previous slide"
        onClick={() => goTo(position - 1)}
      >
        <ChevronRightIcon />
      </button>

      <button
        type="button"
        className={clsx(styles.arrow, styles.next)}
        aria-label="Next slide"
        onClick={() => goTo(position + 1)}
      >
        <ChevronRightIcon />
      </button>

      <div className={styles.dots}>
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={clsx(styles.dot, index === activeIndex && styles.dotActive)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex}
            onClick={() => goTo(index + 1)}
          />
        ))}
      </div>

      <div className={styles.viewport}>
        <div
          className={clsx(styles.track, animated && styles.animated)}
          style={{ transform: `translateX(-${position * 100}%)` }}
        >
          {track.map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className={styles.slide}
              style={{ backgroundImage: `url(${slide.background})` }}
              inert={index !== position}
            >
              <div className={styles.overlay}>
                <div className={styles.container}>
                  <HeroContent />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
