import { stats } from '@/data/home';
import { StatCircle } from './StatCircle';
import styles from './StatsSection.module.scss';

export function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {stats.map((stat) => (
          <StatCircle
            key={`${stat.top}-${stat.bottom}`}
            top={stat.top}
            bottom={stat.bottom}
            value={stat.value}
            durationMs={stat.durationMs}
          />
        ))}
      </div>
    </section>
  );
}
