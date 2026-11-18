import Image from 'next/image';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { contactInfo, mapEmbedUrl } from '@/data/site';
import { ContactForm } from './ContactForm';
import styles from './ContactSection.module.scss';

export function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionTitle>
          <span className="text-navy">Contact</span>
          <span className="text-brand"> Us</span>
        </SectionTitle>

        <div className={styles.split}>
          <div className={styles.half}>
            <iframe
              src={mapEmbedUrl}
              title="Our location on the map"
              className={styles.map}
              width="600"
              height="450"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className={styles.half}>
            <ContactForm />
          </div>
        </div>

        <div className={styles.cards}>
          {contactInfo.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.icon}>
                  <Image src={item.icon} alt="" className="h-auto w-full" />
                </div>
                <div className={styles.text}>
                  <p className={styles.cardTitle}>
                    <strong>{item.title}</strong>
                  </p>
                  <p className={styles.cardValue}>{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
