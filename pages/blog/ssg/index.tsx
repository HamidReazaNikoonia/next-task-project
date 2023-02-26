import Home from "..";

import {
  getBlogs,
  getRunningQueriesThunk,
} from "../../../features/blog/blogApi";

import { makeStore, wrapper } from "../../../lib/store";


export default Home;

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
      store.dispatch(getBlogs.initiate());

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);