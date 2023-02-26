import Head from "next/head";
import Link from "next/link";

export default function Home({}) {
  return (
    <>
      <Head>
        <title>{'siteTitle'}</title>
      </Head>
      <section>
        <h2 className="title">Task for RoomVu </h2>
        <ul className="linkList">
          <li>
            <Link href="/blog/ssr/1">Get Specific Post in SSR Mode SSR</Link>
          </li>
          <li>
            <Link href="/blog/ssr/1">Get Specific Post in SSG Mode SSG</Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}