// State
import { makeStore, wrapper } from '../../../lib/store';
import { getBlogs, getBlogById, getRunningQueriesThunk } from '../../../features/blog/blogApi';

// Components
import Post from '../[id]';

export async function getStaticPaths() {
  const store = makeStore();
  const result = await store.dispatch(getBlogs.initiate());

  return {
    paths: result?.data.map((p) => `/blog/ssg/${p.id}`).slice(0, 10),
    fallback: true,
  };
}

export default Post;

export const getStaticProps = wrapper.getStaticProps((store) => async (context) => {
  const id = context.params?.id;
  if (id && typeof id === 'string') {
    store.dispatch(getBlogById.initiate(id));
  }

  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: {},
  };
});
