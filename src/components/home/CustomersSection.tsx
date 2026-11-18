import { SectionTitle } from '@/components/ui/SectionTitle';
import { CustomersCarousel } from './CustomersCarousel';
import styles from './CustomersSection.module.scss';

export function CustomersSection() {
  return (
    <section className={styles.section}>
      <SectionTitle className="text-navy">Customers</SectionTitle>
      <div className={styles.logos}>
        <CustomersCarousel />
      </div>
    </section>
  );
}
