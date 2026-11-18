import { skills } from '@/data/home';
import styles from './ExcellenceSection.module.scss';
import { ImageSlider } from './ImageSlider';
import { SkillBar } from './SkillBar';

export function ExcellenceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.media}>
          <ImageSlider />
        </div>

        <div className={styles.words}>
          <h2 className={styles.heading}>Excellence In Any Structure</h2>
          <p className={styles.paragraph}>
            Lorem Ipsum is a fabricated text with the production of incomprehensible simplicity from the
            printing industry and using graphic designers. Printers and texts, but also newspapers and
            magazines in columns and rows as necessary and for the current conditions of technology
            required and diverse applications with the aim of improving practical tools.
          </p>

          {skills.map((skill) => (
            <SkillBar key={skill.label} label={skill.label} value={skill.value} durationMs={skill.durationMs} />
          ))}
        </div>
      </div>
    </section>
  );
}
