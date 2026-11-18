import { footerColumns } from '@/data/site';
import styles from './Footer.module.scss';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.columnInner}>
              <div className="my-[10px] flex justify-center">
                <Logo variant="footer" />
              </div>
              <p className={styles.about}>
                Site Saz Construction Development Group operates to provide construction services at global
                standards, earn balanced profits, and align with national interests and interests.
              </p>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className={`${styles.column} text-center`}>
              <div className={styles.columnInner}>
                <p className="my-[10px]">
                  <strong>{column.title}</strong>
                </p>
                <ul className={styles.links}>
                  {column.links.map((label) => (
                    <li key={label}>
                      <a href="#">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="my-[10px] w-full py-[7px]">
            <hr className={styles.rule} />
          </div>

          <p className="my-[10px] w-full text-center normal-case">Website design by Amir.FF</p>
        </div>
      </div>
    </footer>
  );
}
