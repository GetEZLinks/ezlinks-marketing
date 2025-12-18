
import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { PostConnectionQuery, PostConnectionQueryVariables } from '../../../tina/__generated__/types';
import styles from './BlogPage.module.scss';

interface ClientPostProps {
  data: PostConnectionQuery;
  query: string;
  variables: PostConnectionQueryVariables;
}

export default function PostsClientPage(props: ClientPostProps) {
  const posts = props.data?.postConnection.edges!.map((postData) => {
    const post = postData!.node!;
    const date = new Date(post.date!);
    let formattedDate = '';
    if (!isNaN(date.getTime())) {
      formattedDate = format(date, 'MMM dd, yyyy');
    }

    return {
      id: post.id,
      published: formattedDate,
      title: post.title,
      tags: post.tags?.map((tag) => tag?.tag?.name) || [],
      url: `/posts/${post._sys.breadcrumbs.join('/')}`,
      excerpt: post.excerpt,
      heroImg: post.heroImg,
      author: {
        name: post.author?.name || 'Anonymous',
        avatar: post.author?.avatar,
      }
    }
  });

  return (
    <div className={styles.blogPage}>
      <div className="container">
        <div className={styles.header}>
          <h1>Blog</h1>
          <p>Latest updates and stories</p>
        </div>
        
        <div className={styles.postsGrid}>
          {posts?.map((post) => (
            <article key={post.id} className={styles.postCard}>
              <div className={styles.postMeta}>
                <time className={styles.date}>{post.published}</time>
              </div>
              
              <h2 className={styles.postTitle}>
                <Link href={post.url}>
                  {post.title}
                </Link>
              </h2>
              
              <p className={styles.postDescription}>
                {post.excerpt}
              </p>
              
              <div className={styles.postFooter}>
                <Link href={post.url} className={styles.readMore}>
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