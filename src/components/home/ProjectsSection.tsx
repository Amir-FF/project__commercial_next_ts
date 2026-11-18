import Image from 'next/image';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { galleryRows } from '@/data/home';
import styles from './ProjectsSection.module.scss';

export function ProjectsSection() {
  return (
    <section className={styles.section}>
      <SectionTitle>
        <span className="text-brand">Our </span>
        <span className="text-navy">Projects</span>
      </SectionTitle>

      <div className={styles.gallery}>
        {galleryRows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((item) => (
              <div key={item.id} className={item.wide ? styles.wide : styles.narrow}>
                <Image src={item.image} alt="" className={styles.photo} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
