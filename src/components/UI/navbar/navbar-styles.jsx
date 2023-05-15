import styled from "styled-components";

const StyledNavbar = styled.nav`
  >ul {
    display: flex;
    gap: 0.5rem;
    >li {
      list-style: none;
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-radius: 5px;
      &:hover {
        border: 1px solid #0ad9fe;
      }
    }
  }
`;

export default StyledNavbar;