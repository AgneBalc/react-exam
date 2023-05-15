import StyledError from "./error.styles";

const Error = ({ children }) => {
  return (
    <StyledError>
      {children}
    </StyledError>
  );
}

export default Error;