'use client';
import { notFound , useParams} from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import styles from './BlogPost.module.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

interface BlogPostPageProps {
  params: {   
  slug: string;
  }
}


const BlogPost = ({ post }: { post: typeof blogPosts[number] }) => {
  
  return (
    <article className={styles.blogPost}>
      <div className="container">
        <Link href="/blog" className={styles.backLink}>
          ← Back to Blog
        </Link>
        
        <header className={styles.postHeader}>
          <div className={styles.postMeta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.readTime}>{post.readTime}</span>
          </div>
          
          <h1 className={styles.postTitle}>{post.title}</h1>
          <p className={styles.postDescription}>{post.description}</p>
          
          <div className={styles.postDate}>
            Published on {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </div>
        </header>

        <div className={styles.postContent}>
          {/* In a real app, you'd use a markdown renderer */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <footer className={styles.postFooter}>
          <Link href="/blog" className={styles.backLink}>
            ← Back to Blog
          </Link>
        </footer>
      </div>
    </article>
  );
}

const BlogPostPage = () => {
  // 2. Call the hook (no async/await needed here)
  const params = useParams()
  console.log('BlogPostPage params:', params);
  // 3. Use the slug immediately
  const post = blogPosts.find((p) => p.id === params?.slug)

  if (!post) {
    notFound();
  }
  return (
    <main>
      <Header />
      <BlogPost post={post} />   
      <Footer />
    </main>
  )
}

export default BlogPostPage;