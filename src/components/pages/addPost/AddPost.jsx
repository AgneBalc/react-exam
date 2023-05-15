import { useContext } from "react";
import StyledForm from "../../UI/form.styles";
import Input from "../../UI/input/Input";
import Textarea from "../../UI/textarea/Textarea";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { v4 as generatedId } from 'uuid';
import PostsContext, { POSTS_ACTIONS } from "../../../contexts/posts-context";

const AddPost = () => {
  const { dispatchPosts } = useContext(PostsContext);
  const navigate = useNavigate();

  const initialValues = {
    title: '',
    content: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const newPost = {
        id: generatedId(),
        title: values.title,
        content: values.content,
      };

      dispatchPosts({
        type: POSTS_ACTIONS.ADD,
        post: newPost,
      });
      navigate('/');
    }
  });

  return (
    <StyledForm>
      <h1>Add new post</h1>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="title"
          type="text"
          label="Title"
          {...formik.getFieldProps('title')}
        />
        <Textarea
          id="content"
          label="Content"
          {...formik.getFieldProps('content')}
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