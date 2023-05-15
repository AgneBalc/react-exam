import PostCard from "../../UI/post-card/PostCard";
import StyledHome from "./home.styles";

const Home = () => {
  return (
    <StyledHome>
      <div className="home-header">
        <h1>React Blog</h1>
        <p>This blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted here first. You can also follow the @reactjs account on Twitter, but you won’t miss anything essential if you only read this blog.</p>
      </div>
      <div className="allPosts">
      </div>
    </StyledHome>
  );
}

export default Home;