import styles from './PageBanner.module.scss';

export function PageBanner({ title }: { title: string }) {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
}
