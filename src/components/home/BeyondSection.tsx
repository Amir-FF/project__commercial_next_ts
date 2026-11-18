'use client';

import clsx from 'clsx';
import Image from 'next/image';
import beyondModel from '@/assets/images/home/beyond-model.png';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { useInView } from '@/hooks/useInView';
import styles from './BeyondSection.module.scss';

export function BeyondSection() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.bgImage}>
        <div className={styles.bgBlue}>
          <div className={styles.container}>
            <div className={styles.row}>
              {/* Decorative, tilted picture that overflows the section */}
              <div className={styles.imageCol}>
                <div className={styles.imageRow}>
                  <div className={styles.imageBox}>
                    <Image src={beyondModel} alt="" className={styles.image} />
                  </div>
                </div>
              </div>

              <div className={clsx(styles.word, inView && styles.slideIn)}>
                <div className={styles.wordInner}>
                  <h2 className={styles.heading}>Beyond The Program</h2>
                  <p className={styles.paragraph}>
                    Lorem Ipsum is a fabricated text produced by the printing industry with the help of
                    graphic designers and printers, and also newspapers and magazines in columns and rows
                    as required.
                  </p>
                  <div className={styles.buttons}>
                    <ButtonLink href="#" variant="orange">
                      Continue reading
                    </ButtonLink>
                    <ButtonLink href="/contact-us" variant="navyInvert">
                      Contact us
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
