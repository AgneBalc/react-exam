import styled from "styled-components";

const StyledHeader = styled.header`
  height: 70px;
  box-shadow: 0px 3px 6px 1px rgb(229, 231, 235);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  z-index: 9;
  >img {
    height: 50px;
  }
`;

export default StyledHeader;