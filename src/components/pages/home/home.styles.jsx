import styled from "styled-components";

const StyledHome = styled.main`
  max-width: 900px;
  margin: 2rem auto;
  .home-header {
    >h1 {
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: 1px;
    }
    >p {
      margin: 1rem 0;
      font-size: 1.25rem;
    }
  }
  .allPosts {
    margin-top: 3rem;
    display: grid;
    gap: 1.25rem;
  }
`;

export default StyledHome;