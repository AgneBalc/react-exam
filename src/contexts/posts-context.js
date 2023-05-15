import { createContext, useEffect, useReducer } from "react";

const PostsContext = createContext();

const POSTS_ACTIONS = {
  GET: 'get_all_posts',
  ADD: 'add_new_post',
}

const postsReducer = (state, action) => {
  switch (action.type) {
    case POSTS_ACTIONS.GET:
      return action.data;
    default:
      return state;
  }
}

const PostsProvider = ({ children }) => {
  const [posts, dispatchPosts] = useReducer(postsReducer, []);

  useEffect(() => {
    fetch('http://localhost:8080/posts')
      .then(res => res.json())
      .then(data => dispatchPosts({
        type: POSTS_ACTIONS.GET,
        data,
      }));
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts,
        dispatchPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export default PostsContext;
export { PostsProvider, POSTS_ACTIONS };