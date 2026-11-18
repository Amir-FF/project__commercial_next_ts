import Image from 'next/image';
import { recentPosts } from '@/data/posts';
import styles from './LatestNewsSection.module.scss';

export function LatestNewsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Latest News</h2>

        <div className={styles.list}>
          {recentPosts.map((post) => (
            <div key={post.id} className={styles.item}>
              <article className={styles.card}>
                <Image src={post.image} alt="" className="h-auto w-full" />
                <h3 className={styles.title}>{post.title}</h3>
                <div className={styles.linkWrap}>
                  <a href="#" className={styles.link}>
                    Read More
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
