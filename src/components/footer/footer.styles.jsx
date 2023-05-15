import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 150px;
  box-shadow: 0px -3px 6px 1px rgb(229, 231, 235);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
  p {
    font-size: 0.8rem;
    color: #626060;
  }
  ul {
    display: flex;
    gap: 1rem;
  }
  li {
    list-style: none;
    cursor: pointer;
    a {
      text-decoration: none;
      color: #000;
      padding: 0.5rem;
      &:hover {
        border: 1px solid #0ad9fe;
        border-radius: 5px;
      }
      i {
        font-size: 20px;
        color: #0ad9fe;
      }
    }
  }

`;

export default StyledFooter;