/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetBlogByIdQuery } from "../../features/blog/blogApi";

import { useRouter } from "next/dist/client/router";

// Partial because first render (will get empty props while `getStaticProps` runs)
export default function Blog() {
  const router = useRouter();

  const { id } = router.query;

  const result = useGetBlogByIdQuery(
    typeof id === "string" ? id : skipToken,
    {
      // If the page is not yet generated, router.isFallback will be true
      // initially until getStaticProps() finishes running
      skip: router.isFallback,
    }
  );
  const { isLoading, error, data } = result;

  return (
    <>
      <Head>
        <title>{data?.title ?? ""}</title>
      </Head>
      <article>
        {error ? (
          <>Oh no, there was an error</>
        ) : router.isFallback || isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.body}</h3>
          </>
        ) : null}
      </article>
    </>
  );
}