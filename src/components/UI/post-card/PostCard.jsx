import StyledCard from "./post-card.styles";

const PostCard = ({ post }) => {
  return (
    <StyledCard>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </StyledCard>
  );
}

export default PostCard;