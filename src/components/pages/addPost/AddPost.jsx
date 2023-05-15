import StyledForm from "../../UI/form.styles";
import Input from "../../UI/input/Input";
import Textarea from "../../UI/textarea/Textarea";

const AddPost = () => {
  return (
    <StyledForm>
      <h1>Add new post</h1>
      <form>
        <Input
          id="title"
          type="text"
          label="Title"
        />
        <Textarea
          id="content"
          label="Content"
        />
        <Input
          type="submit"
          value="Add"
        />
      </form>
    </StyledForm>
  );
}

export default AddPost;