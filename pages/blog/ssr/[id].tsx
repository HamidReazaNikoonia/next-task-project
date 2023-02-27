// State
import { wrapper } from '../../../lib/store';
import { getBlogById, getRunningQueriesThunk } from '../../../features/blog/blogApi';

// Components
import Post from '../[id]';

export default Post;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const id = context.params?.id;
  if (id && typeof id === 'string') {
    store.dispatch(getBlogById.initiate(id));
  }

  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: {},
  };
});
