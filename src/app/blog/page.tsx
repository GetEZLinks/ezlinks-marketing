import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import styles from './BlogPage.module.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const Blog = () => {
  return (
    <div className={styles.blogPage}>
      <div className="container">
        <div className={styles.header}>
          <h1>Blog</h1>
          <p>Thoughts on AI, product validation, and building faster</p>
        </div>
        
        <div className={styles.postsGrid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.postCard}>
              <div className={styles.postMeta}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>
              
              <h2 className={styles.postTitle}>
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className={styles.postDescription}>
                {post.description}
              </p>
              
              <div className={styles.postFooter}>
                <time className={styles.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
                <Link href={`/blog/${post.id}`} className={styles.readMore}>
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

const BlogPage = () => {
  return (
    <main>
      <Header />
      <Blog />   
      <Footer />
    </main>
  )
}

export default BlogPage;