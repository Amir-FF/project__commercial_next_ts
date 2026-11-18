import { SectionTitle } from '@/components/ui/SectionTitle';
import { services } from '@/data/home';
import { ServiceCard } from './ServiceCard';
import styles from './Services.module.scss';

export function ServicesSection() {
  return (
    <section className={styles.section}>
      <div className="pt-[10px]">
        <SectionTitle className="text-navy">Services</SectionTitle>
      </div>

      <div className={styles.cards}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} title={service.title} image={service.image} index={index} />
        ))}
      </div>

      <p className={styles.provisions}>
        Site Builder Construction Development Group operates in Iran and abroad in order to provide
        construction services in accordance with global standards, earn balanced profits in line with
        national interests and interests, and engage in investment, partnership, contracting, and
        through 6 subsidiary companies in various construction projects, including commercial,
        administrative, residential, construction of residential and tourism facilities, new
        construction technologies, etc.
      </p>
    </section>
  );
}
