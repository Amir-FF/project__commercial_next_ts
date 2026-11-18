import type { Metadata } from 'next';
import { PostCard } from '@/components/blog/PostCard';
import { RecentPosts } from '@/components/blog/RecentPosts';
import { PageBanner } from '@/components/ui/PageBanner';
import { posts } from '@/data/posts';
import styles from '@/components/blog/Blog.module.scss';

export const metadata: Metadata = { title: 'Blog' };

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Blog" />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.posts}>
            <div className={styles.postsInner}>
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <RecentPosts />
        </div>
      </section>
    </>
  );
}
