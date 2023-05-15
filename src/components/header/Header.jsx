import StyledHeader from "./header-styles";
import Navbar from "../UI/navbar/Navbar";

const Header = () => {
  return (
    <StyledHeader>
      <img src="https://www.pngplay.com/wp-content/uploads/6/Exam-Transparent-Background.png" alt="logo" />
      <Navbar />
    </StyledHeader>
  );
}

export default Header;