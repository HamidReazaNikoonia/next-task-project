// State
import { wrapper } from '../../../lib/store';
import { getBlogs, getRunningQueriesThunk } from '../../../features/blog/blogApi';

// Components
import Home from '..';

export default Home;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(getBlogs.initiate());

  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: {},
  };
});
