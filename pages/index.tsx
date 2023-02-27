import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>{'siteTitle'}</title>
      </Head>
      <section>
        <h2 className="home-link-title">Task for RoomVu </h2>
        <ul className="home-link-list">
          <li>
            <Link href="/blog/ssr">Get Specific Post in SSR Mode SSR</Link>
          </li>
          <li>
            <Link href="/blog/ssg">Get Specific Post in SSG Mode SSG</Link>
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
