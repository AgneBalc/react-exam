import { useFormik } from "formik";
import Input from "../../UI/input/Input";
import StyledLogin from "./login.styles";

const Login = () => {
  return (
    <StyledLogin>
      <h1>Log In</h1>
      <form>
        <Input
          id="email"
          type="email"
          label="Email"
        // {...formik.getFieldProps('email')}
        />
        <Input
          id="password"
          type="password"
          label="Password"
        // {...formik.getFieldProps('password')}
        />
        <Input
          type="submit"
          value="Log In"
        />
      </form>
    </StyledLogin>
  );
}

export default Login;