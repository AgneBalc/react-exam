import StyledHeader from "./header-styles";
import Navbar from "../UI/navbar/Navbar";

const Header = () => {
  return (
    <StyledHeader>
      <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="logo" />
      <Navbar />
    </StyledHeader>
  );
}

export default Header;