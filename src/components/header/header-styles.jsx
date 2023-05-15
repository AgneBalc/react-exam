import styled from "styled-components";

const StyledHeader = styled.header`
  height: 70px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  >img {
    height: 100%;
  }
`;

export default StyledHeader;