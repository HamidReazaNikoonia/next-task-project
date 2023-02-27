/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { skipToken } from '@reduxjs/toolkit/query';
import { useRouter } from 'next/dist/client/router';

// Layouts
import ArticleCard from '../../layouts/ArticleCard';

// State
import { useGetBlogByIdQuery } from '../../features/blog/blogApi';

// Styles
import styles from './styles/post.module.scss';

export default function Blog() {
  const router = useRouter();

  const { id } = router.query;

  const result = useGetBlogByIdQuery(typeof id === 'string' ? id : skipToken, {
    // router.isFallback will be true If the page is not yet generated
    skip: router.isFallback,
  });
  const { isLoading, error, data } = result;

  return (
    <>
      <Head>
        <title>{data?.title ?? ''}</title>
      </Head>
      <article className={styles.postContainer}>
        {error ? (
          <>Oh no, there was an error</>
        ) : router.isFallback || isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <ArticleCard title={data.title} createdAt={data.id} description={data.body} />
          </>
        ) : null}
      </article>
    </>
  );
}
