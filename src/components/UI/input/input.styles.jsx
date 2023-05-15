import styled from "styled-components";

const StyledInput = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
  >label {
  font-weight: 700;
}
>input:not(input[type='submit']) {
  height: 2rem;
  padding: 3px 7px;
  border: 1px solid rgb(166, 166, 166);
  border-radius: 3px;
}
>input[type='submit'] {
  background-color: #0ad9fe;
  border: none;
  font-size: 14px;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  font-weight: 700;
  cursor: pointer;
  align-self: center;
  letter-spacing: 0.5px;
}
>input[type='submit']:hover {
  border: 2px solid #0ad9fe;
  background-color: #fff;
}
`;

export default StyledInput;