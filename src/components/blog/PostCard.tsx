import Image from 'next/image';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { CalendarIcon, ClockIcon, CommentIcon } from '@/components/ui/icons';
import type { Post } from '@/data/posts';
import styles from './Blog.module.scss';

export function PostCard({ post }: { post: Post }) {
  return (
    <article className={styles.post}>
      <Image src={post.image} alt="" className="my-[10px] h-auto w-full" />

      <h2 className={styles.postTitle}>{post.title}</h2>

      <ul className={styles.meta}>
        <li>
          <CalendarIcon />
          <span>{post.date}</span>
        </li>
        <li>
          <ClockIcon />
          <span>{post.time}</span>
        </li>
        <li>
          <CommentIcon />
          <span>{post.comments} Comments</span>
        </li>
      </ul>

      <p className={styles.excerpt}>{post.excerpt}</p>

      <div className={styles.readMore}>
        <ButtonLink href="#" variant="blogNavy">
          Read More
        </ButtonLink>
      </div>
    </article>
  );
}
