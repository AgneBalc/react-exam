import { useFormik } from "formik";
import Input from "../../UI/input/Input";
import StyledLogin from "./login.styles";
import { useContext, useState } from "react";
import UsersContext, { USERS_ACTIONS } from "../../../contexts/users-context";
import { useNavigate } from "react-router-dom";
import StyledError from "../../UI/error/error.styles";

const Login = () => {
  const [error, setError] = useState('');
  const { users: { users }, dispatchUsers } = useContext(UsersContext);

  const navigate = useNavigate();

  const createErrorMsg = (message) => {
    setError(message);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      setError('');

      const existingUser = users.find(user => user.email === values.email);

      const passwordIsMatching = () => {
        return existingUser && values.password === existingUser.password ?
          true : false
      };

      if (!passwordIsMatching()) {
        createErrorMsg('Incorrect email address or password!')
      } else {
        dispatchUsers({
          type: USERS_ACTIONS.LOGIN
        });
        navigate('/home');
      }
    }
  });

  return (
    <StyledLogin>
      <h1>Log In</h1>
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
          type="submit"
          value="Log In"
        />
        {error && (
          <StyledError>{error}</StyledError>
        )}
      </form>
    </StyledLogin>
  );
}

export default Login;