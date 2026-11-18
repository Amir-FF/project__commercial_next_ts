import Image from 'next/image';
import aboutUs from '@/assets/images/home/about-us.png';
import styles from './AboutSection.module.scss';

const paragraph =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde velit eius reprehenderit inventore amet vitae, ipsum quo hic! Eligendi minima dolorum totam iste porro, perspiciatis libero hic saepe ipsa distinctio?';

export function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.about}>
          <h2 className={styles.heading}>
            <span className="text-navy">About </span>
            <span className="text-brand">We</span>
          </h2>
          <div className={styles.text}>
            <p>{paragraph}</p>
            <p>{paragraph}</p>
          </div>
        </div>

        <div className={styles.image}>
          <Image src={aboutUs} alt="" className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}
