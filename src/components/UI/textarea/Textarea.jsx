import StyledTextarea from "./textarea.styles";

const Textarea = (props) => {
  return (
    <StyledTextarea>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        required
      />
    </StyledTextarea>
  );
}

export default Textarea;