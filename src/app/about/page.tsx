import type { Metadata } from 'next';
import Image from 'next/image';
import styles from '@/components/about/About.module.scss';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PageBanner } from '@/components/ui/PageBanner';
import { team } from '@/data/about';
import projectManagement from '@/assets/images/about/project-management.jpg';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About" />

      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.word}>
            <h2 className={styles.heading}>Complete Project Management</h2>
            <p className={styles.paragraph}>
              Lorem Ipsum is a fabricated text with the production of incomprehensible simplicity from the
              printing industry and using graphic designers. Printers and texts, but also newspapers and
              magazines in columns and rows as necessary and for the current conditions of technology
              required and diverse applications with the aim of improving practical tools.
            </p>
            <div className={styles.buttonRow}>
              <ButtonLink href="#" variant="outlineOrange">
                Reading The Article
              </ButtonLink>
            </div>
          </div>

          <div className={styles.image}>
            <Image src={projectManagement} alt="" className="h-auto w-full" />
          </div>
        </div>
      </section>

      <section className={styles.approvals}>
        <div className={styles.approvalsInner}>
          <h2 className={styles.approvalsTitle}>Approvals</h2>

          <div className={styles.team}>
            {team.map((member) => (
              <article key={member.id} className={styles.member}>
                <div className={styles.memberHead}>
                  <div className={styles.avatar}>
                    <Image src={member.image} alt={member.name} className="my-[10px] h-auto w-full" />
                  </div>
                  <div className={styles.memberInfo}>
                    <p className={styles.role}>{member.role}</p>
                    <p className={styles.name}>{member.name}</p>
                  </div>
                </div>
                <p className={styles.memberText}>{member.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
