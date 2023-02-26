import {
    getBlogs,
    getRunningQueriesThunk,
  } from "../../../features/blog/blogApi";
  
  import { wrapper } from "../../../lib/store";
  import Home from "..";
  
  export default Home;
  
  export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        store.dispatch(getBlogs.initiate());
        await Promise.all(store.dispatch(getRunningQueriesThunk()));
  
      return {
        props: {},
      };
    }
  );