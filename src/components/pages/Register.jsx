import { useContext, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { v4 as generatedId } from 'uuid';
import Input from "../UI/input/Input";
import StyledError from "../UI/error/error.styles";
import UsersContext, { USERS_ACTIONS } from "../../contexts/users-context";
import StyledLogin from "../UI/form.styles";

const Register = () => {
  const [error, setError] = useState('');
  const { users: { users }, dispatchUsers } = useContext(UsersContext);

  const navigate = useNavigate();

  const createErrorMsg = (message) => {
    setError(message);
  };

  const initialValues = {
    email: '',
    password: '',
    passwordConfirm: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      setError('');

      const isExisting = users.find(user => user.email === values.email);
      const passwordIsMatching = values.password === values.passwordConfirm;
      if (isExisting) {
        createErrorMsg('User with this e-mail already exists!');
      } else if (!passwordIsMatching) {
        createErrorMsg("Passwords don't match!");
      }

      const newUser = {
        id: generatedId(),
        email: values.email,
        password: values.password,
      }

      navigate('/');
    }
  });

  return (
    <StyledLogin>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="email"
          type="email"
          label="Email"
          {...formik.getFieldProps('email')}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          {...formik.getFieldProps('password')}
        />
        <Input
          id="passwordConfirm"
          type="password"
          label="Re-enter password"
          {...formik.getFieldProps('passwordConfirm')}
        />
        <Input
          type="submit"
          value="Register"
        />
        {error && (
          <StyledError>{error}</StyledError>
        )}
      </form>
    </StyledLogin>
  );
}

export default Register;