import { Link } from "react-router-dom";
import StyledFooter from "./footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <nav>
        <ul>
          <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a></li>
          <li><a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a></li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li><Link to='/'>Terms of Use</Link></li>
          <li><Link to='/'>Privacy Policy</Link></li>
        </ul>
      </nav>
      <p>Copyright © 2023. All rights reserved.</p>
    </StyledFooter>
  );
}

export default Footer;