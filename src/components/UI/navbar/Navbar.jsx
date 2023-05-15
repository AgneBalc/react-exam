import { NavLink, useNavigate } from "react-router-dom";
import StyledNavbar from "./navbar-styles";
import { useContext } from "react";
import UsersContext, { USERS_ACTIONS } from "../../../contexts/users-context";

const Navbar = () => {
  const { users: { isLoggedIn }, dispatchUsers } = useContext(UsersContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatchUsers({ type: USERS_ACTIONS.LOGOUT });
    navigate('/');
  }

  return (
    <StyledNavbar>
      {isLoggedIn ? (
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/add'>Add Post</NavLink></li>
          <li onClick={handleLogout}>Log Out</li>
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