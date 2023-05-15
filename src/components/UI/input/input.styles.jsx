import styled from "styled-components";

const StyledInput = styled.div`
  >label {
  font-size: 13px;
  font-weight: 700;
  padding-bottom: 2px;
}
>input:not(input[type='submit']) {
  height: 2rem;
  padding: 3px 7px;
  border: 1px solid rgb(166, 166, 166);
  border-radius: 3px;
}
>input[type='submit'] {
  background-color: #019eb7;
  border: none;
  font-size: 13px;
  height: 29px;
  border-radius: 0.5rem;
}
`;

export default StyledInput;