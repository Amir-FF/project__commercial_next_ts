'use client';

import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';
import styles from './ExcellenceSection.module.scss';

interface SkillBarProps {
  label: string;
  value: number;
  durationMs: number;
}

export function SkillBar({ label, value, durationMs }: SkillBarProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const current = useCountUp(value, durationMs, inView);

  return (
    <div ref={ref}>
      <p className={styles.skillLabel}>{label}</p>

      {/* Right-to-left on purpose: the bar fills from the right edge. */}
      <div className={styles.skillBar}>
        <div className={styles.badge} style={{ marginRight: `${100 - current}%` }}>
          <span>{current}</span>%
        </div>
        <div className={styles.line}>
          <div className={styles.fill} style={{ maxWidth: `${current}%` }} />
        </div>
      </div>
    </div>
  );
}
