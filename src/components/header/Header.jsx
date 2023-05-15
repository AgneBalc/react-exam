import StyledHeader from "./header-styles";
import Navbar from "../UI/navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Link to='/'>
        <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="logo" />
      </Link>
      <Navbar />
    </StyledHeader>
  );
}

export default Header;