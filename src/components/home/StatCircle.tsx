'use client';

import type { CSSProperties } from 'react';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';
import styles from './StatsSection.module.scss';

interface StatCircleProps {
  top: string;
  bottom: string;
  value: number;
  durationMs: number;
}

export function StatCircle({ top, bottom, value, durationMs }: StatCircleProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '0px 0px -150px 0px' });
  const current = useCountUp(value, durationMs, inView);

  return (
    <div className={styles.stat}>
      <div className={styles.statInner}>
        <div className={styles.label}>
          <p className={styles.top}>{top}</p>
          <p className={styles.bottom}>{bottom}</p>
        </div>

        <div className={styles.circleCol}>
          <div className={styles.circleRow}>
            <div ref={ref} className={styles.circleBox}>
              <div className={styles.circle} style={{ '--value': current } as CSSProperties} />
              <div className={styles.circleText}>
                <p>% {current}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
