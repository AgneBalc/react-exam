import { NavLink } from "react-router-dom";
import StyledNavbar from "./navbar-styles";
import { useContext } from "react";
import UsersContext from "../../../contexts/users-context";

const Navbar = () => {
  const { users: { isLoggedIn } } = useContext(UsersContext);

  return (
    <StyledNavbar>
      {isLoggedIn ? (
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/add'>Add Post</NavLink></li>
          <li>Log Out</li>
        </ul>
      ) : (
        <ul>
          <li><NavLink to='/'>Log In</NavLink></li>
          <li><NavLink to='/register'>Register</NavLink></li>
        </ul>
      )
      }
    </StyledNavbar>
  );
}

export default Navbar;