import { createContext, useEffect, useReducer, useState } from "react";

const PostsContext = createContext();

const POSTS_ACTIONS = {
  GET: 'get_all_posts',
  ADD: 'add_new_post',
}

const postsReducer = (state, action) => {
  switch (action.type) {
    case POSTS_ACTIONS.GET:
      return action.data;
    case POSTS_ACTIONS.ADD:
      fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action.post)
      });
      return [...state, action.post];
    default:
      return state;
  }
}

const PostsProvider = ({ children }) => {
  const [posts, dispatchPosts] = useReducer(postsReducer, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/posts')
      .then(res => res.json())
      .then(data => {
        dispatchPosts({
          type: POSTS_ACTIONS.GET,
          data,
        });
        setIsLoading(false);
      })
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts,
        dispatchPosts,
        isLoading,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export default PostsContext;
export { PostsProvider, POSTS_ACTIONS };