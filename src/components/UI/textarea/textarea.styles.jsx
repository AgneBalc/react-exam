import styled from "styled-components";

const StyledTextarea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  >label {
    font-weight: 700;
  }
  >textarea {
    min-height: 20rem;
    padding: 0.5rem;
    border: 1px solid rgb(166, 166, 166);
    border-radius: 3px;
  }
`;

export default StyledTextarea;