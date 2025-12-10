import Link from 'next/link';
// import { blogPosts } from '@/data/blogPosts';
import styles from './BlogPage.module.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { client } from '../../../tina/__generated__/client' 
// import { BlogPost, BloPost } from '../../../types/blog';
import { Post } from '../../../tina/__generated__/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';


const Blog = async () => {
  const response = await client.queries.postConnection();
  const posts = response.data.postConnection.edges
    ?.map(edge => edge?.node);
  
    // .filter((post): post is Post => post !== null && post !== undefined)
  console.log('Fetched posts:', posts);

  if (!posts || posts.length === 0) {
    return <p>No blog posts found.</p>;
  }

  return (
    <div className={styles.blogPage}>
      <div className="container">
        <div className={styles.header}>
          <h1>Blog</h1>
          <p>Thoughts on AI, product validation, and building faster</p>
        </div>
        
        <div className={styles.postsGrid}>
          {posts?.map((post) => (
            <article key={post?.id} className={styles.postCard}>
              <div className={styles.postMeta}>
                {/* <span className={styles.category}>{post?.category}</span> */}
                {/* <span className={styles.readTime}>{post?.readTime}</span> */}
              </div>
              
              <h2 className={styles.postTitle}>
                <Link href={`/blog/${post?.id}`}>
                  {post?.title}
                </Link>
              </h2>
              
              <p className={styles.postDescription}>
                <TinaMarkdown content={post?.body} />
              </p>
              
              <div className={styles.postFooter}>
                <time className={styles.date}>
                  {/* {new Date(post?.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })} */}
                </time>
                {/* <Link href={`/blog/${post?.id}`} className={styles.readMore}> */}
                <Link href={`/blog/${post?._sys.filename}`} className={styles.readMore}>
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