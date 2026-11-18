'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { PointerEvent } from 'react';
import clsx from 'clsx';
import { customerLogos } from '@/data/home';
import styles from './CustomersSection.module.scss';

const ADVANCE_MS = 2500;
const SHIFT_MS = 500;
const RELEASE_MS = 1250;

// The logos are repeated so the track always has items on both sides of the visible window.
const initialItems = [...customerLogos, ...customerLogos, ...customerLogos].map((logo, index) => ({
  key: `${logo.id}-${Math.floor(index / customerLogos.length)}`,
  image: logo.image,
}));

export function CustomersCarousel() {
  const [items, setItems] = useState(initialItems);
  const [enabled, setEnabled] = useState(false);
  const [shifting, setShifting] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [releasing, setReleasing] = useState(false);

  const draggingRef = useRef(false);
  const releasingRef = useRef(false);
  const startXRef = useRef(0);
  const dragXRef = useRef(0);

  // The sliding carousel is only used on wide screens; below 1000px the CSS shows a static grid.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1001px)');
    const update = () => setEnabled(query.matches);

    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  // Auto-advance: slide one logo to the right, then move the last item to the front.
  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timeouts = new Set<number>();

    const interval = window.setInterval(() => {
      if (draggingRef.current || releasingRef.current) return;

      setShifting(true);
      const timeout = window.setTimeout(() => {
        setItems((current) => {
          const last = current[current.length - 1];
          return last ? [last, ...current.slice(0, -1)] : current;
        });
        setShifting(false);
        timeouts.delete(timeout);
      }, SHIFT_MS);
      timeouts.add(timeout);
    }, ADVANCE_MS);

    return () => {
      window.clearInterval(interval);
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
    };
  }, [enabled]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!enabled || releasingRef.current) return;

    draggingRef.current = true;
    startXRef.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    dragXRef.current = event.clientX - startXRef.current;
    setDragX(dragXRef.current);
  };

  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;

    if (dragXRef.current === 0) return;

    // Glide back to the resting position.
    releasingRef.current = true;
    setReleasing(true);
    dragXRef.current = 0;
    setDragX(0);

    window.setTimeout(() => {
      releasingRef.current = false;
      setReleasing(false);
    }, RELEASE_MS);
  };

  return (
    <div
      className={styles.viewport}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <ul
        className={clsx(styles.track, shifting && styles.shifting, releasing && styles.releasing)}
        style={{ left: dragX }}
      >
        {items.map((item) => (
          <li key={item.key} className={styles.item}>
            <div className={styles.itemInner}>
              <div className={styles.logo}>
                <Image src={item.image} alt="" draggable={false} className="h-auto w-full" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
